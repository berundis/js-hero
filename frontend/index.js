const CONTAINERHEIGHT = 600;
let gameStart = false
let starter = true
let SONGS = []
const mainBody = document.getElementById('mainbody')

function mainPageSetup() {
  let playButton = document.createElement('button')
  let seeScores = document.createElement('button')
  let fragment = document.createDocumentFragment()

  playButton.setAttribute('id', 'play-game')
  playButton.setAttribute('class', 'main-buttons')
  playButton.innerText = "Play Keytar Hero!"

  seeScores.setAttribute('id', 'see-scores')
  seeScores.setAttribute('class', 'main-buttons')
  seeScores.innerText = "See High Scores"

  fragment.append(playButton)
  fragment.append(seeScores)
  mainBody.append(fragment)

  seeScoresEventListener(seeScores)
  playGameEventListener(playButton)
}


function seeScoresEventListener(seeScoresButton) {
  seeScoresButton.addEventListener('click', (e)=>{
    mainBody.innerHTML = " "
    let fragment = document.createDocumentFragment()
    let instructions = document.createElement('h2')

    instructions.innerText = "Choose a song to see its scores!"
    fragment.append(instructions)
    SongAdapter.getSongs()
    .then(resp => {
      resp.forEach((song)=>{
        if(SONGS.length == 0){
          SONGS.push(song)}
          songButton = document.createElement('button')
          songButton.setAttribute('id', `${song.id}`)
          songButton.setAttribute('class', 'song-buttons')
          songButton.innerText = `${song.name} by ${song.artist}`
          fragment.append(songButton)
        }
      )

      mainBody.append(fragment)
      let songButtons = document.getElementsByClassName('song-buttons')
      for (var i = 0; i < songButtons.length; i++) {
        songButtons[i].addEventListener('click',(e)=>{
          mainBody.innerHTML = " "
          getSongScores(e.target.id)
        })}
      })
    })
}

function playGameEventListener(playButton) {
  playButton.addEventListener('click', (e)=>{
  mainBody.innerHTML = " "
  let fragment = document.createDocumentFragment()
  let instructions = document.createElement('h2')

  instructions.innerText = "Choose a song to play!"
  fragment.append(instructions)
  SongAdapter.getSongs()
  .then(resp => {
    resp.forEach((song)=>{
      if(SONGS.length == 0){
      SONGS.push(song)}
      songButton = document.createElement('button')
      songButton.setAttribute('id', `${song.id}`)
      songButton.setAttribute('class', 'song-buttons')
      songButton.innerText = `${song.name} by ${song.artist}`
      fragment.append(songButton)
    }
  )

  mainBody.append(fragment)
  let songButtons = document.getElementsByClassName('song-buttons')
  for (var i = 0; i < songButtons.length; i++) {
    songButtons[i].addEventListener('click',(e)=>{
      mainBody.innerHTML = " "
      setUpSong(e.target.id)
    })}
  })
})
}

function findById(songs, songID){
  return songs.filter(song=> (song.id == songID))[0]
}


function createArray(allFrets, x, red, green, blue){
  let arr = []
  for (var i = 0; i < allFrets.length; i++) {
    arr[i] = new Fret(x, allFrets[i], red, green, blue)
  }
  return arr
}

function showArr(fretArr, speed){
  for(let i = 0; i < fretArr.length; i++){
    fretArr[i].show()
    fretArr[i].move(speed)
    if (fretArr[i].y > CONTAINERHEIGHT-75){
      fretArr.shift();
      score.innerText = parseInt(score.innerText) - 100
      multiplier.innerText = '1'
      visual.innerText = '.'
    }
  }
}

function AddScore(fretArr) {
  if(fretArr.length > 0){
    if(fretArr[0].onInputBox() || fretArr[1].onInputBox()){

      if(fretArr[1].onInputBox()){
        fretArr.slice(1)

      }
      fretArr.shift()

      score.innerText = parseInt(score.innerText) + (100 * parseInt(multiplier.innerText))
      visual.innerText += '.'
      if(visual.innerText == '............'){
        multiplier.innerText = parseInt(multiplier.innerText) + 1
        visual.innerText = '.'
      }

    }else {

      score.innerText = parseInt(score.innerText) - 100
      visual.innerText = '.'
      multiplier.innerText = '1'
    }
  }
}

function getSongScores(id) {
  SongAdapter.getSong(id)
    .then(song =>{
      setUpScores(song.scores)
    })
}


function setUpSong(id) {
  SongAdapter.getSong(id)
  .then(song => {
    setUpGame()
    let playingSong = SONGNOTES[parseInt(id)-1]
    let q = playingSong.allQFrets
    let w = playingSong.allWFrets
    let e = playingSong.allEFrets
    let r = playingSong.allRFrets
    let t = playingSong.allTFrets
    setupCanvas(q,w,e,r,t)
    let canvas = document.querySelector('canvas')
    canvas.setAttribute('id', `${id}`)
    console.log(canvas);

    gameStart = true
    let audio = new Audio('./audio/The White Stripes.mp3');
    audio.play()
  })
}

function setUpGame() {
  let score = document.createElement('span')
  let fragment = document.createDocumentFragment()
  let scoreCard = document.createElement('h2')
  let multiplier = document.createElement('span')
  let multiplierCard = document.createElement('h2')
  let multiplierVisual = document.createElement('p')

  score.setAttribute('id', 'score')
  score.innerText = '0'
  scoreCard.innerText = 'Score: '
  multiplier.setAttribute('id', 'multiplier')
  multiplier.innerText = '1'
  multiplierCard.innerText = 'Multiplier: x '
  multiplierVisual.setAttribute('id', 'visual')
  multiplierVisual.innerText = "."

  scoreCard.append(score)
  multiplierCard.append(multiplier)
  fragment.append(scoreCard)
  fragment.append(multiplierCard)
  fragment.append(multiplierVisual)
  mainBody.append(fragment)
}

function setUpScores(scoreArray) {
  let list = document.createElement('ul')
  let highScores = scoreArray.sort((a,b) => b.value - a.value)
  highScores.forEach((score) =>{
    let scoreList = document.createElement('li')
    scoreList.innerText = `${score.name} scored ${score.value} points!`
    list.append(scoreList)
  })
  mainBody.append(list)
}

document.addEventListener("keyup", (e)=>{
  if(gameStart){
  let score = document.getElementById('score')
  let multiplier = document.getElementById('multiplier')
  let visual = document.getElementById('visual')
  keyPush(e)}
});

function keyPush(evt) {
  switch(evt.keyCode) {
    case 81:
    AddScore(qArr)
    break;
    case 87:
    AddScore(wArr)
    break;
    case 69:
    AddScore(eArr)
    break;
    case 82:
    AddScore(rArr)
    break;
    case 84:
    AddScore(tArr)
    break;
  }
}

const CONTAINERHEIGHT = 600;
let gameStart = false
let starter = true
let SONGS = []
const mainBody = document.getElementById('mainbody')
const songDiv = document.getElementById('songContainer')
let songAudio
const ENDGAME = 24

function findById(songs, songID){
  return songs.filter(song=> (song.id == songID))[0]
}

function mainPageSetup() {
  mainBody.innerHTML = ' '
  let playButton = document.createElement('h2')
  let seeScores = document.createElement('h2')
  let lineBreak = document.createElement('br')
  let fragment = document.createDocumentFragment()

  playButton.setAttribute('id', 'play-game')
  playButton.setAttribute('class', 'main-buttons')
  playButton.innerText = "Rock Out!"

  seeScores.setAttribute('id', 'see-scores')
  seeScores.setAttribute('class', 'main-buttons')
  seeScores.innerText = "High Scores"

  fragment.append(playButton)
  fragment.append(seeScores)
  mainBody.append(fragment)

  mainButtonsEventListener([seeScores, playButton])
}

function setBackground(id){
    switch(id) {
      case "see-scores":
      document.body.style.background = "url('./images/highscore.jpg') no-repeat center center fixed"
      document.body.style.backgroundSize = "cover"
      break;
      case "play-game":
      document.body.style.background = "url('./images/choosesong.png') no-repeat center center fixed"
      document.body.style.backgroundSize = "cover"
      break;
      case "1":
      document.body.style.background = "url('./images/tws playing.jpeg') no-repeat center center fixed"
      document.body.style.backgroundSize = "cover"
      break;
      case "2":
      document.body.style.background = "url('./images/atdi playing.jpg') no-repeat center center fixed"
      document.body.style.backgroundSize = "cover"
      break;
      case "3":
      document.body.style.background = "url('./images/phantom playing.jpg') no-repeat center center fixed"
      document.body.style.backgroundSize = "cover"
      break;
    }
  }

function setUpSongButtons(e) {
  mainBody.innerHTML = " "
  let fragment = document.createDocumentFragment()
  let instructions = document.createElement('h3')
  SONGS = []

  let homePage = document.createElement('p')
  homePage.innerText = "Home"
  homePage.setAttribute('id', 'homepage')
  fragment.append(homePage)
  homePageEventListener(homePage)

  fragment.append(instructions)

  if(e.target.id == 'see-scores'){
    instructions.innerText = 'Choose a song to see its scores!'
  } else if(e.target.id == 'play-game'){
    instructions.innerText = 'Choose your set!'
  }
  mainBody.append(fragment)
}

function mainButtonsEventListener(arr) {
  arr.forEach(element => {
    element.addEventListener('click', (e)=>{
      setUpSongButtons(e)
      let fragment = document.createDocumentFragment()

      setBackground(e.target.id)
      let songContainer = document.createElement('div')
      songContainer.setAttribute('class', 'flex-container')

      SongAdapter.getSongs()
      .then(resp => {
        resp.forEach((song)=>{
            SONGS.push(song)
            let songDiv = document.createElement('div')
            let songTitle = document.createElement('h4')
            let songArtist = document.createElement('h4')
            songPicture = document.createElement('img')

            songPicture.setAttribute('id', `${song.id}`)
            songPicture.setAttribute('class', 'song-images')
            songTitle.innerText = `${song.name}`
            songArtist.innerText = `By: ${song.artist}`

            songPicture.src = song.imagePath
            songDiv.append(songPicture, songTitle, songArtist)
            fragment.append(songDiv)
          }
        )
        songContainer.append(fragment)

        mainBody.append(songContainer)

        let songPictures = document.getElementsByClassName('song-images')
        for (var i = 0; i < songPictures.length; i++) {
          let preview = new Audio()

          if(e.target.id == 'play-game'){
            songPictures[i].addEventListener('mouseover', (event)=>{
              let song = findById(SONGS, event.target.id)
              preview.src = song.previewPath
              preview.load()
              preview.play()
            })
            songPictures[i].addEventListener('mouseout', (event)=>{
              preview.pause()
            })
          }
          songPictures[i].addEventListener('click',(event)=>{
            mainBody.innerHTML = " "
            if(e.target.id == 'see-scores'){
              getSongScores(event.target.id)
              setBackground(event.target.id)
            } else if(e.target.id == 'play-game'){
              preview.pause()
              setUpSong(event.target.id)
              setBackground(event.target.id)
            }

          })}
        })
    })
  })
}

function homePageEventListener(homePage) {
  homePage.addEventListener('click', ()=>{
    mainPageSetup()
    document.body.style.background = "url('./images/homepage.jpg') no-repeat center center fixed"
    document.body.style.backgroundSize = "cover"
  })
}


function getSongScores(id) {
  SongAdapter.getSong(id)
    .then(song =>{
      let songTitle = document.createElement('h3')
      songTitle.innerHTML = `${song.name} by ${song.artist}`
      mainBody.append(songTitle)
      setUpScores(song.scores)
    })
}

function setUpScores(scoreArray) {
  let list = document.createElement('ul')

  let homePage = document.createElement('p')
  homePage.innerText = "Home"
  homePage.setAttribute('id', 'homepage')
  list.append(homePage)

  homePageEventListener(homePage)


  let orderedScores = scoreArray.sort((a,b) => b.value - a.value).slice(0,10)
  orderedScores.forEach((score) =>{
    let scoreList = document.createElement('li')
    scoreList.innerText = `${score.name} scored ${score.value} points!`
    list.append(scoreList)
  })
  let scoreDiv = document.createElement('div')
  scoreDiv.setAttribute("class", "scorelist")
  scoreDiv.append(list)
  mainBody.append(scoreDiv)
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
    gameStart = true
    songAudio = new Audio(song.filePath);
    songAudio.play()
  })
}

function setUpGame() {
  let div = document.createElement('div')
  let score = document.createElement('span')
  let fragment = document.createDocumentFragment()
  let scoreCard = document.createElement('h2')
  let multiplier = document.createElement('span')
  let multiplierCard = document.createElement('h2')
  /// jon
  let pointDiv = document.createElement('div')
  pointDiv.setAttribute('id', 'point-div')
  let multiplierVisual = document.createElement('p')

  div.setAttribute('class', 'scoreClass')
  score.setAttribute('id', 'score')
  score.innerText = '0'
  scoreCard.innerText = 'Score: '
  multiplier.setAttribute('id', 'multiplier')
  multiplier.innerText = '1'
  multiplierCard.innerText = 'Multiplier: x '
  multiplierVisual.setAttribute('id', 'visual')
  multiplierVisual.innerText = "."
  //// jon
  pointDiv.append(multiplierVisual)
  scoreCard.append(score)
  multiplierCard.append(multiplier)
  fragment.append(scoreCard)
  fragment.append(multiplierCard)
  fragment.append(pointDiv)
  div.append(fragment)
  mainBody.append(div)
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

function endGame() {
  gameStart = false
  starter = true
  mainBody.style.display = ""
  songAudio.pause()
  let finalScore = document.createElement('h3')
  let points = score.innerText
  let songId = canvas.id
  finalScore.innerText = `Your score is ${points}.`
  mainBody.innerHTML = ""
  mainBody.append(finalScore)
  canvas.remove()
  scoreForm(points, songId)
}

function renderForm(points) {
  return `<form id="scoreSubmit">
  Name: <input type=text id="player-name" placeholder="Cannot be empty!"><br>
  <input type="submit" id="submit-points-form" value="Submit">
  </form>`
}

function scoreForm(points, songId) {
  let form = document.createElement('div')
  form.innerHTML = renderForm(points)
  mainBody.append(form)

  let submitButton = document.getElementById('submit-points-form')
  submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    let playerName = document.getElementById('player-name').value
    if(playerName && playerName.trim()){
      e.preventDefault()
      let scoreObj = {name: playerName.trim(), value: points, song_id: songId}
      ScoreAdapter.createScore(scoreObj)
      .then(resp => {
        mainBody.innerHTML = ' '
        getSongScores(songId)
      })
    }
  })
}

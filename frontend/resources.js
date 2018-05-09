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

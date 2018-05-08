document.addEventListener("DOMContentLoaded", ()=>{
  const button = document.getElementById('play-game')
  const body = document.getElementById('mainbody')

  button.addEventListener('click', (e)=>{
    e.target.remove()
    let fragment = document.createDocumentFragment()
    let instructions = document.createElement('h2')
    
    instructions.innerText = "Choose a song to play!"
    fragment.append(instructions)
    SongAdapter.getSongs()
    .then(resp => {
      resp.forEach((song)=>{
        songButton = document.createElement('button')
        songButton.setAttribute('id', `${song.id}`)
        songButton.innerText = `${song.name} by ${song.artist}`
        fragment.append(songButton)})

        body.append(fragment)
        body.addEventListener('click', (e)=>{
          if(e.target.tagName == "BUTTON"){
            body.innerHTML = " "
            setUpSong(e.target.id)
          }
        })
      })
    })

  function setUpSong(id) {
    SongAdapter.getSong(id)
    .then(song => {
      setUpGame()
      let playingSong = SONGS[parseInt(id)-1]
      let q = playingSong.allQFrets
      let w = playingSong.allWFrets
      let e = playingSong.allEFrets
      let r = playingSong.allRFrets
      let t = playingSong.allTFrets
      setupCanvas(q,w,e,r,t)
      let canvas = document.querySelector('canvas')
      canvas.setAttribute('id', `${id}`)
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
    body.append(fragment)
  }

  document.addEventListener("keyup", (e)=>{
    if(gameStart){
    let score = document.getElementById('score')
    let multiplier = document.getElementById('multiplier')
    let visual = document.getElementById('visual')
    keyPush(e)}});

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



  })

class ScoreAdapter{

  static createScore(scoreObj){
    return fetch('http://localhost:3000/api/v1/scores', {
      method: 'POST',
      headers: {'CONTENT-Type': 'application/json'},
      body: JSON.stringify(scoreObj)
    })
    .then(res => res.json())
  }


}

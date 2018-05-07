document.addEventListener("DOMContentLoaded", ()=>{


  document.addEventListener("keydown",keyPush);
  document.addEventListener("keyup", ()=>{
  })

  function keyPush(evt) {
      switch(evt.keyCode) {
          case 81:
              console.log(q.y > 690 && q.y < 710);
              break;
          case 87:
              console.log('w');
              break;
          case 69:
              console.log('e');
              break;
          case 82:
              console.log('r');
              break;
      }
  }

})

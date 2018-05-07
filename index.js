document.addEventListener("DOMContentLoaded", ()=>{


  document.addEventListener("keyup",keyPush);

  function keyPush(evt) {
      switch(evt.keyCode) {
          case 81:
              console.log(qArr[0].y > 600 && qArr[0].y < 800);
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

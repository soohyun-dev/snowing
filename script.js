function createSnow(){
    const el = document.createElement("div");  
    el.classList.add('snow'); /* 객체 add메소드 사용 snow 적용*/
    el.style.marginLeft = randomPostion() + 'px';
    document.body.appendChild(el); /*자신의 요소로서 추가*/
  }
  function randomPostion(){
    return Math.floor(Math.random() * window.innerWidth); /* 화면 내의 크기안에서 랜덤으로 나옴 */
  }
  for (let i=0; i<500; i++){
    createSnow();
  }
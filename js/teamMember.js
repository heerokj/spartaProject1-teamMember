

  const bottomBtn = document.querySelector(".moveBottomBtn");
  const topBtn = document.querySelector(".moveTopBtn");

  // 버튼 클릭 시 페이지 하단으로 이동
  bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });  
  }
  // 버튼 클릭 시 맨 위로 이동
  topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });  
  }

  window.addEventListener('scroll', () => {
  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  let windowHeight = window.innerHeight; // 스크린 창
  let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

  //스크롤이 끝으로 이동 시
  if(scrollLocation + windowHeight >= fullHeight){     
  }
  
})
window.onload = function () {
  let $html = $("html");
  let page = 1;
  let lastPage = $(".team-member-wrap").length; //마지막 페이지 번호
  $html.animate({ scrollTop: 0 }, 10); //문서(페이지)가 로드되면 첫 페이지 시작

  // page == 1 인 경우 화이트로 색 변경
  if (page == 1) {
    let circle = document.getElementById("one");
    circle.style.backgroundColor = "white";
  }

  //휠을 굴리면 다음 페이지, 이전 페이지
  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  $(window).on("wheel", function (e) {
    if ($html.is(":animated")) return;

    //스크롤을 아래로 했으면 페이지 +1, 위로 올렸으면 -1씩 시키기
    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage) return; //마지막 페이지인 경우에는 이벤트 핸들러 종료
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return; //첫 번째 페이지인 경우에도 이벤트 핸들러 종료
      page--;
    }
    var posTop = (page - 1) * $(window).height(); //이동할 페이지의 번호에 스크롤할 위치 계산

    $html.animate({ scrollTop: posTop }); //계산한 위치로 이동

    // page == 2 인 경우 화이트로 색 변경
    if (page == 2) {
      let circle = document.getElementById("four");
      circle.style.backgroundColor = "white";
    }
  });
};

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
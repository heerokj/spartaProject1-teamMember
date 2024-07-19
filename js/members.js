document.addEventListener("DOMContentLoaded", () => {
  const teamItems = document.querySelectorAll(".team-item");
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const messageIcon = document.querySelectorAll(".message-icon");

  messageIcon.forEach((message) => {
    message.addEventListener("click", (e) => {
      const contactInfo = message.getAttribute("data-contact");
      e.stopPropagation();
      navigator.clipboard
        .writeText(contactInfo)
        .then(() => {
          alert(`복사되었습니다: ${contactInfo}`);
        })
        .catch((err) => {
          console.error("복사 실패", err);
        });
    });
  });

  teamItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const modalId = item.getAttribute("data-modal");
      const modal = document.querySelector(`.${modalId}`);
      if (modal) {
        modal.style.display = "block";
      }
    });

    // 클릭 이벤트버블링 제거
    const links = item.querySelectorAll(".icon-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  });

  // 모달 취소 버튼
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // 모달 취소 버튼 (빈 화면 클릭 시)
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});

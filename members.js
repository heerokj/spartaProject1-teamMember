document.addEventListener("DOMContentLoaded", () => {
  const teamItems = document.querySelectorAll(".team-item");
  const closeModalButtons = document.querySelectorAll(".close-modal");

  teamItems.forEach((item) => {
    item.addEventListener("click", () => {
      const modalId = item.getAttribute("data-modal");
      const modal = document.querySelector(`.${modalId}`);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});

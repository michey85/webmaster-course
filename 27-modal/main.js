const btn = document.getElementById("open-modal");

const modal = document.getElementById("modal1");
const btnClose = document.querySelector(".modal__close");

btn.onclick = () => {
  modal.classList.add("modal_active");

  btnClose.addEventListener("click", closeModal);
  modal.addEventListener("click", hideModal);

  // Вспомогательные хэндлеры
  function closeModal() {
    modal.classList.remove("modal_active");
    btnClose.removeEventListener("click", closeModal);
    modal.removeEventListener("click", hideModal);
  }
  function hideModal(e) {
    if (e.target === modal) {
      closeModal();
    }
  }
};

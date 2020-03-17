(function() {
  const tabs = document.querySelectorAll(".tab-head__item");
  const contents = document.querySelectorAll(".tab-content__item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => changeTab(index));
  });

  function changeTab(activeIndex) {
    changeActive(tabs, activeIndex);
    changeActive(contents, activeIndex);
  }

  function changeActive(col, activeIndex) {
    for (let el of col) {
      el.classList.remove("active");
    }
    col[activeIndex].classList.add("active");
  }
})();

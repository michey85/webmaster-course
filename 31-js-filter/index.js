const btns = document.querySelectorAll(".filter-btns__item");
const select = document.getElementById("filter-options");
const images = document.querySelectorAll(".filter-content img");

for (let btn of btns) {
  btn.onclick = function() {
    filterImage(this.dataset.filter);
  };
}

function filterImage(sel) {
  for (let img of images) {
    img.style.display = "none";

    if (img.classList.contains(sel)) {
      setTimeout(() => {
        img.style.display = "block";
      }, 0);
    }
  }

  for (let btn of btns) {
    if (btn.dataset.filter === sel) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }

  select.value = sel;
}

select.addEventListener("change", () => {
  filterImage(select.value);
});

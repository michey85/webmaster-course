const sliderImg = document.querySelector(".slider__image");
const dots = document.querySelectorAll(".slider__dot");

const images = ["./img/html.jpg", "./img/css.jpg", "./img/js.jpg"];
let currentIndex = 0;

function changeIndex(direction) {
  currentIndex += direction;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  slide(currentIndex);
}

function fixIndex(index) {
  currentIndex = index;
  slide(currentIndex);
}

function slide(index) {
  sliderImg.style.display = "none";
  setTimeout(() => {
    sliderImg.style.display = "block";
  }, 0);

  sliderImg.src = images[index];

  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
}

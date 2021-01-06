const sliderNext = document.getElementById("slider-next");
const sliderPrev = document.getElementById("slider-prev");
const sliderTrack = document.getElementById("slider-track");

let currentSlide = 0;
console.log(sliderTrack, sliderNext, sliderPrev);
const navDots = [...document.getElementsByClassName("dots")];

// sliderNext.addEventListener("click", (e) => {
//   if (currentSlide == 2) {
//     currentSlide = -1;
//   }
//   const width = sliderTrack.parentElement.clientWidth;
//   currentSlide = currentSlide + 1;
//   console.log(currentSlide * width);
//   sliderTrack.style.transform = `translateX(-${currentSlide * width}px)`;
//   updateClass();
// });

// sliderPrev.addEventListener("click", (e) => {
//   if (currentSlide == 0) {
//     currentSlide = 3;
//   }
//   const width = sliderTrack.parentElement.clientWidth;
//   currentSlide = currentSlide - 1;
//   console.log(currentSlide * width);
//   sliderTrack.style.transform = `translateX(-${currentSlide * width}px)`;
//   updateClass();
// });

navDots.map((item, index) => {
  item.addEventListener("click", (e) => {
    const width = sliderTrack.parentElement.clientWidth;
    currentSlide = index;
    console.log(currentSlide * width);
    sliderTrack.style.transform = `translateX(-${currentSlide * width}px)`;
    updateClass();
  });
});

const updateClass = () => {
  navDots.map((item, index) => {
    if (index == currentSlide) {
      return item.classList.add("active-nav");
    }
    item.classList.remove("active-nav");
  });
};

(() => {
  updateClass();
})();

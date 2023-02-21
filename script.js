const imgs = document.getElementById("imgs");
const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let currentSlideIndex = 0;

let interval = setInterval(run, 2000);

function run() {
    currentSlideIndex++;
    changeSlides();
}

function changeSlides() {
    if (currentSlideIndex > img.length - 1) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = img.length - 1;
    }

    imgs.style.transform = `translateX(${-currentSlideIndex * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

prevBtn.addEventListener("click",  () => {
    currentSlideIndex--;
    changeSlides();
    resetInterval();
});

nextBtn.addEventListener("click", () => {
    currentSlideIndex++;
    changeSlides();
    resetInterval();
});
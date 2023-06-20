const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]
const slideIMG = document.querySelectorAll(".slider-img");
const btnsLeftRight = document.querySelectorAll(".slider-btn");
const sliderTitle = document.querySelector('.slider-title')
const sliderLegend = document.querySelector('.slider-legend');
const dot = document.querySelectorAll('.dot');
let activeSlide = 0;
btnsLeftRight.forEach(ele => {
    ele.addEventListener("click", CarouselMove)
})
dot.forEach((ele, index) => {
    // CREATE NEW OBJECT IN ELE : (DOT) -> index (0 - 1 - 2)
    ele.indPos = index;
    ele.addEventListener('click', dotMove)
});
init()

function init() {
    // RUN ON LOAD PROPERTIES
    sliderTitle.textContent = slidesData[activeSlide].title;
    sliderLegend.textContent = slidesData[activeSlide].description;
    btnsLeftRight[0].style.opacity = "0.3";
    dot[1].style.opacity = "0.3";
    dot[2].style.opacity = "0.3";
}
function CarouselMove(e) {
    // CHECK WITH TERNARY OPERATOR IF BUTTON RIGHT OR LEFT IS SELECTED
    activeSlide += e.currentTarget.classList.contains("slider-btn-right") ? +1 : -1;
    // CHECK LOWER BOUNDARY
    if (activeSlide <= 0) activeSlide = 0;
    // CHECK UPPER BOUNDARY
    if (activeSlide >= slideIMG.length - 1) activeSlide = slideIMG.length - 1;
    // RUN ANNIMATION / CSS
    displayContent(activeSlide)
}
function dotMove(e) {
    // SET ACTIVE SLIDE TO THE CURRENT DOT SELECTED
    activeSlide = e.currentTarget.indPos;
    // RUN ANNIMATION / CSS
    displayContent(activeSlide)
}
function displayContent(actvSlide) {
    // BTN OPACITY RESET
    btnsLeftRight[0].style.opacity = btnsLeftRight[1].style.opacity = 1;
    // TEXT CONTENT DISPLAY
    sliderTitle.textContent = slidesData[actvSlide].title;
    sliderLegend.textContent = slidesData[actvSlide].description;
    // APPLY STYLE TO IMGS
    slideIMG.forEach((img, index) => {
        img.style.transform = `translateX(${100 * (index - actvSlide)}%)`;
        img.style.transition = "transform 1s linear";
        dot[index].style.opacity = "0.3";
    })
    // PUT OPACITY ON WRIGHT ELEMENT
    if (actvSlide < 1) btnsLeftRight[0].style.opacity = "0.3";
    // PUT OPACITY ON WRIGHT ELEMENT
    if (actvSlide > slideIMG.length - 2) btnsLeftRight[btnsLeftRight.length - 1].style.opacity = "0.3";
    // REMOVE OPACITY ON WRIGHT ELEMENT
    dot[actvSlide].style.opacity = "1";
}
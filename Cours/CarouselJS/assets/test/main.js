var slides = document.querySelectorAll(".slideCard");
var slideDots = document.querySelectorAll(".slideDot");
let currentSlide = 0;
let currentArrow = null;
let previousArrow = null;

function resetDot() {
  for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].classList.remove("selectedSlide");
  }
}

function slideMovement(direction) {
  if (direction === "right") {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.flex = "0";
      slides[i].style.transform = "translateX(-100%)";
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.flex = "0";
      slides[i].style.transform = "translateX(100%)";
    }
  }
  resetDot();
}

const updateSlideStyle = (index) => {
  slides[index].style.flex = "1 1 100%";
  slides[index].style.transition = "transform 0.6s linear";
  if (previousArrow != currentArrow) {
    setTimeout(() => {
      slides[index].style.transform = "translateX(0px)";
      previousArrow = currentArrow;
    }, 600);
  } else {
    slides[index].style.transform = "translateX(0px)";
  }
};

const slideEvent = (direction) => {
  const directionMovStep = direction === "right" ? 1 : -1;
  arrowClicked = directionMovStep;
  changeSlides(directionMovStep);
  updateSlideStyle(currentSlide);
  //Dots handle
  slideDots[currentSlide].classList.add("selectedSlide");
};

function setCurrentSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  }
  if (n >= slides.length) {
    currentSlide = 0;
  }
}

function changeSlides(n) {
  const direction = n >= 0 ? "right" : "left";
  currentArrow = direction;
  setCurrentSlide((currentSlide += n));
  slideMovement(direction);
  let discWindows = document.querySelectorAll(".discVisible");
  [].forEach.call(discWindows, function(el) {
    el.classList.remove("discVisible");
  });
}

//open disclosure
let discBtn = document.getElementsByClassName("disclosurePrompt");
let disc;
for (disc = 0; disc < discBtn.length - 1; disc++) {
  discBtn[disc].addEventListener("click", function() {
    this.nextElementSibling.classList.add("discVisible");
  });
}

// //manually select slide
let slideSelectBtn = document.getElementsByClassName("slideNumberDots");
slideSelectBtn[0].addEventListener("click", function(event) {
  const {
    target
  } = event;
  if (target) {
    currentSlide = target.getAttribute("data-slide") - 1;
    slideMovement();
    updateSlideStyle(currentSlide);
    target.classList.add("selectedSlide");
  }
});

//close disclosure
let closeBtn = document.getElementsByClassName("fa-times");
let close;
for (close = 0; close < closeBtn.length - 1; close++) {
  closeBtn[close].addEventListener("click", function() {
    var slideDiscWindow = document.querySelectorAll(".discVisible");
    [].forEach.call(slideDiscWindow, function(el) {
      el.classList.remove("discVisible");
    });
  });
}

//slide controls

let left = document.getElementById("slideLeft");
let right = document.getElementById("slideRight");

left.addEventListener("click", () => slideEvent("left"));
right.addEventListener("click", () => slideEvent("right"));
slideDots[currentSlide].classList.add("selectedSlide");
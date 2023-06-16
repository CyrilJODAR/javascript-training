const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]
const slideIMG = document.querySelectorAll(".slider-img");
const btnsLeftRight = document.querySelectorAll(".slider-btn");
let activeSlide = 0;

CarouselMove()

function CarouselMove(){
    btnsLeftRight.forEach(ele => {
        ele.addEventListener("click", (e)=>{
            btnsLeftRight[0].style.opacity = "1";
            btnsLeftRight[1].style.opacity = "1";
            let nextPrevBtn =e.currentTarget.classList.contains("slider-btn-right") ? 1 : -1;
            activeSlide += nextPrevBtn;
            if(activeSlide < 0) {
                activeSlide = 0;
            }
            if(activeSlide > slideIMG.length - 1) {
                activeSlide = slideIMG.length - 1;
            }
            if(activeSlide <1){
                e.currentTarget.style.opacity = "0.3";
            }
            if(activeSlide > slideIMG.length - 2){
                e.currentTarget.style.opacity = "0.3";
            }

            for (let i = 0; i < slideIMG.length; i++) {
                slideIMG[i].style.transform = `translateX(${100 * (i - activeSlide)}%)`;
                slideIMG[i].style.transition = "transform 0.6s linear";
            }
        })
    })
}
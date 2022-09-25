const txt = document.querySelector(".txt-title");
const content = "안녕하세요 :)\n개발꿈나무 오수빈입니다.";
let contentIndex = 0;

let typing = function () {
    txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
      txt.innerHTML += "<br/>";
      contentIndex++;
    }
    if (contentIndex > content.length) {
      txt.textContent = "";
      contentIndex = 0;
    }
};
  
// 0.2초간격으로 typing 함수 실행
setInterval(typing, 200);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const slideImgs = document.querySelector(".slide-images");
const IMG_WIDTH = 438;
let imgIndex = 0;
let position = 0;

let prev = function () {
    if (imgIndex > 0) {
      btnNext.removeAttribute("disabled");
      position += IMG_WIDTH;
      slideImgs.style.transform = `translateX(${position}px)`;
      imgIndex = imgIndex - 1;
    }
    if (imgIndex == 0) { 
      btnPrev.setAttribute("disabled", "true");
    }
};

let next = function () {
    if (imgIndex < 5) {
      btnPrev.removeAttribute("disabled");
      position -= IMG_WIDTH;
      slideImgs.style.transform = `translateX(${position}px)`;
      slideImgs.style.transition = "transform .5s ease-out";
      imgIndex = imgIndex + 1;
    }
    if (imgIndex == 2) {
      btnNext.setAttribute("disabled", "true");
    }
};

let init = function () {
    btnPrev.setAttribute("disabled", "true");
    btnPrev.addEventListener("click", prev);
    btnNext.addEventListener("click", next);
};
init();

const modalBg = document.getElementsByClassName("modal-background");
const btnOpen = document.getElementsByClassName("btn-open");
const btnClose = document.getElementsByClassName("btn-close");

function modal(num) {
    btnOpen[num].addEventListener("click", () => {
      modalBg[num].style.display = "flex";
      document.body.style.overflow = "hidden";
    });
    btnClose[num].addEventListener("click", () => {
      modalBg[num].style.display = "none";
      document.body.style.overflow = "unset";
    });
}
  
for (let i = 0; i < btnOpen.length; i++) {
  modal(i);
}

let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("bar-ing")[0];
};

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop; // y축 방향으로 얼만큼 스크롤했는지!
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);

let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};


let changeToProject = function(){
    document.querySelector(".section-main").innerHTML="";
    //document.querySelector(".section-project").innerHTML="";
  //console.log(document.querySelector(".section-about"))
};
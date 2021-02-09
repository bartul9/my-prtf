"use strict";

const box1 = document.querySelector(".one");
const box2 = document.querySelector(".two");
const box3 = document.querySelector(".three");
////

const main = document.querySelector(".main");

const changeImages = function (object) {
  object.addEventListener("mouseenter", function () {
    object.classList.add("special");
    object.style.color = "white";
    console.log("hover");
  });

  object.addEventListener("mouseout", function () {
    object.classList.remove("special");
    object.style.color = "rgba(255, 255, 255, 0)";
  });
};

changeImages(box1);
changeImages(box2);
changeImages(box3);

const mainfunc = function () {
  main.addEventListener("mouseenter", function () {
    main.style.color = "rgba(17, 0, 255, 0)";
    main.style.backgroundImage = "url(/resize-images/head.jpg)";
    main.style.opacity = 1;
    setTimeout(() => {
      main.style.backgroundImage =
        "url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
      main.style.color = "#03a062";
    }, 4000);
  });
  //   main.addEventListener("mouseout", function () {
  //     main.style.opacity = 0;
  //     main.style.color = "#03a062";
  //   });
};

mainfunc();

const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const headspan = document.querySelector("#heading--span");

header.addEventListener("mouseenter", function () {
  h1.style.transform = "skewY(0)";
  headspan.style.transform = "skewY(0)";
});

header.addEventListener("mouseleave", function () {
  h1.style.transform = "skewY(22deg)";
  headspan.style.transform = "skewY(-22deg)";
});

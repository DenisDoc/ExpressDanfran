"use strict";
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImageUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImageUrl.split("/express-img-tmb/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', "");
      console.log(setNewImgUrl);

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImageWindow = document.createElement("div");
      container.appendChild(newImageWindow);
      newImageWindow.setAttribute("class", "img-window");
      newImageWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImageWindow.appendChild(newImg);
      newImg.setAttribute("src", "./express-img/" + setNewImgUrl);
      newImg.setAttribute("id", "current-img");
      console.log(newImg);

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 50;
        let calcImgToEdgeRight = (windowWidth - imgWidth) / 2 - 50 - 15;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right:" + calcImgToEdgeRight + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
      };
    };
  });
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);
  let calcNewImg;

  if (changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }
  newImg.setAttribute("src", "express-img/img-ex-" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 50;
    let calcImgToEdgeRight = (windowWidth - imgWidth) / 2 - 50 - 15;

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left:" + calcImgToEdge + "px;";
    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right:" + calcImgToEdgeRight + "px;";
  };
}

// "use strict";
import imageArr from "./image.js";
import ref from "./refs.js";
import Draw from "./class.js";

const drawInnerBody = new Draw();

// const container = document.querySelectorAll("div");

//-----more fast method
// const container = document.getElementsByClassName("container");

//------------
// const container = document.querySelector(".container");
// const ListItem = document.querySelectorAll(".container li");
// console.log(container);
// const ulList = ListItem[0].parentNode;

// ulList.firstElementChild.style.color = "green";
// ulList.firstElementChild.style.fontSize = "60px";
//----------- with css add class
// ulList.firstElementChild.classList.add("textStyle");
// ulList.firstElementChild.classList.replace("textStyle", "newTextStyle");
// ulList.lastElementChild.style.color = "tomato";
//-------- create

// const createElement = (element, name, text) => {
//   const elem = document.createElement(element);
//   elem.classList.add(name);
//   elem.textContent = text;
//   return elem;
// };

// const createDiv = createElement("div", "container");
// const createUl = createElement("ul", "list");
// const createLi = createElement("li", "List_item", "some text");
// document.body.prepend(createDiv);

// document.querySelector("div").prepend(createUl);

// const getUl = document.querySelector(".list");

// getUl.prepend(createLi);

// console.log(imageArr);

//-------- click -----

// const btn = document.querySelector(".btn");

// let total = 0;

// btn.onclick = function() {
//   total++;
//   console.log(total);
// };

// window.onclick = function(event) {
//   //   console.log(event.target.tagName);
//   if (event.target.tagName !== "DIV") {
//     return;
//   }

//   if (
//     event.target.className === "box_tomato" ||
//     event.target.className === "pos"
//   ) {
//     console.log("box_tomato");

//     event.target.style.backgroundColor = "green";
//     event.target.classList.replace("box_tomato", "pos");

//     console.log(event.target);
//   } else if (event.target.className === "box_blue") {
//     console.log("box_blue");
//   }
// };

// window.onmousemove = function(e) {};

// setInterval(() => {
//   console.log(total++);
// }, 1000);

// console.log(imageArr);

// const container = document.querySelector(".container");

// const draw = arr => {
//   const drawImage = arr.map(({ image }) => {
//     document.body.querySelector(
//       ".imageContainer"
//     ).innerHTML += `<img width='400px' src=${image}/>`;
//   });

//   console.log(drawImage);
// };

// draw(imageArr);

//--------

// const draw = arr => {
//   const drawImage = arr.map(({ image }) => {
//     return `<img width='400px' src=${image}/>`;
//   });
//   return drawImage;
// };

// ref.body.insertAdjacentHTML("beforeend", drawInnerBody.draw(imageArr));

// document.querySelectorAll(".imageContainer img").forEach(
//   image =>
//     (image.onclick = function(e) {
//       console.log(e.target);
//       e.target.classList.toggle("pos");
//     })
// );

//---------------- replay ---------

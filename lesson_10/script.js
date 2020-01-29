//------- обьект
// const users = [
//   {
//     name: "Max",
//     work: true,
//     show() {
//       console.log("dkkf");
//     }
//   }
// ];

// // console.log(users);
// //------ переводим в json
// // const transformJson = JSON.stringify(users);

// // console.log(transformJson);
// //------ переводим с json

// // const transformWithJson = JSON.parse(transformJson);
// // console.log(transformWithJson);

// // console.log(products);

// //----------- default block color

// const refs = {
//   box: document.querySelector(".box"),
//   about: document.querySelector(".about"),
//   innerDefaultName: document.querySelector(".innerDefaultName")
// };

// const getInputValue = e => {
//   console.log(e.target.value);
//   localStorage.setItem("str", e.target.value);
//   refs.innerDefaultName.textContent = localStorage.getItem("str");
// };
// refs.innerDefaultName.textContent = localStorage.getItem("str");
// refs.about.addEventListener("change", getInputValue);
// const options = {
//   width: 300,
//   height: 300,
//   color: "tomato"
// };

// localStorage.setItem("key", JSON.stringify(options));

// const getOptions = localStorage.getItem("key");
// console.log(getOptions);
// const newOptions = JSON.parse(getOptions);
// refs.box.style.width = newOptions.width + "px";
// refs.box.style.height = newOptions.height + "px";
// refs.box.style.backgroundColor = newOptions.color;

// const result = localStorage.getItem("key");

// console.log(result);

const users = [
  {
    name: "John",
    isShow: false,
    friends: ["Ben", "Chan"]
  },
  {
    name: "Bond",
    isShow: true,
    friends: ["Ben", "Max", "Chan", "Bim"]
  },
  {
    name: "Chan",
    isShow: true,
    friends: ["Ben", "Max", "Chan", "Den"]
  },
  {
    name: "Anna",
    isShow: true,
    friends: ["Max", "Chan"]
  }
];

const template = document.querySelector("#template").innerHTML.trim();

console.log(template);

const trnasformHBS = Handlebars.compile(template);
// перебор через map
// const getHBSstring = users.map(user => trnasformHBS(user));
//------- перебор через #each

const getHBSstring = trnasformHBS(users);

console.log(getHBSstring);

document.querySelector(".container").innerHTML = getHBSstring;

document
  .querySelectorAll(".inner")
  .forEach(elem => (elem.style.border = "1px solid red"));

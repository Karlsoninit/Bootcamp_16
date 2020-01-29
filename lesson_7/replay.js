// const container = document.querySelector(".imageContainer");
// const image = document.querySelector("img");

// image.setAttribute(
//   "src",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.peterpipposkarate.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fdefault-image-800x600.jpg&f=1&nofb=1"
// );

// image.setAttribute(
//   "data-size",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.wsj.net%2Fvideo%2F20170102%2F010417legoboost%2F010417legoboost_1280x720.jpg&f=1&nofb=1"
// );

// container.insertAdjacentElement("beforeend", image);

// const replaceImage = () => {
//   const getSize = image.dataset.size;
//   image.setAttribute("src", getSize);
// };

// // replaceImage();

// const getTime = new Date().getMilliseconds();

// // console.log(Date.now());

// const warrantly = [
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2015,
//     fix: null
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2013
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2018
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2019
//   }
// ];
// const replaseWarrantly = warrantly => {
//   if (!Array.isArray(warrantly)) {
//     return;
//   }
//   let overWarrantly = 0;
//   const getYearNow = new Date().getFullYear();
//   warrantly.forEach(elem => {
//     // console.log(getYearNow - elem.buy);

//     if (getYearNow - elem.buy >= 3) {
//       //   console.log(elem);
//       overWarrantly += 1;
//       elem.isWarrantly = false;
//     }
//   });

//   const rest = warrantly.length - overWarrantly;
//   console.log(rest);
//   console.log(overWarrantly);
//   return { rest, overWarrantly };
// };

// const result = replaseWarrantly(warrantly);
// console.log(result);
// console.log("warrantly", warrantly);

// localStorage.setItem("product", JSON.stringify(warrantly));

//--------------- addEventListener

// const refs = {
//   btn: document.querySelectorAll(".container button"),
//   container: document.querySelector(".container"),
//   info: document.querySelector(".info")
// };

// console.log(refs.btn);

// refs.btn.forEach(
//   btn =>
//     (btn.onclick = e => {
//       console.log(e.target);
//     })
// );

// refs.container.addEventListener("click", event => {
//   const target = event.target;
//   console.log(target.textContent);
// });

// const getInfoValue = e => {
//   console.log(e.target.value);
// };

// refs.info.addEventListener("change", getInfoValue);
// refs.info.addEventListener("input", getInfoValue);
let idGeneration = 0;
const refs = {
  form: document.querySelector("#form"),
  input: document.querySelectorAll("#form input"),
  container: document.querySelector(".tasks"),
  taskKontainer: document.querySelector(".taskKontainer")
};

// console.log(refs.form);

const handleSubmitForm = e => {
  e.preventDefault();
  console.log("submit");
  refs.container.innerHTML = "";
  //   console.log(e.target.elements);
  //   const [login, email, password] = e.target.elements;
  //   console.log(login.value);
  //   console.log(email.value);
  //   console.log(password.value);
  //   const userInfo = {
  //     login: login.value,
  //     email: email.value,
  //     password: password.value
  //   };
  //   console.log(userInfo);
  //   users.push(userInfo);
  //   console.log(users);

  submData.push(user);
  const draw = submData.map(
    elem =>
      `<div class='taskKontainer'><button id='${elem.id}'>delete</button><h2>${elem.login}</h2></div>`
  );
  console.log(draw);
  refs.container.insertAdjacentHTML("beforeend", draw);
  console.log(submData);
};

const submData = [];
const user = {};

refs.input.forEach(elem => {
  elem.addEventListener("change", e => {
    console.log(e.target.name);
    user.id = idGeneration++;
    user[e.target.name] = e.target.value;
    console.log(user);
  });
});

refs.form.addEventListener("submit", handleSubmitForm);

// refs.form.addEventListener("input", e => {
//   console.log(e.target.name);
//   submData[e.target.name] = e.target.value;
//   console.log("submData :", submData);
// });

// console.log(users);

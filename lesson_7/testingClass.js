// console.log("lessons_08");

// class GeneralComponent {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   show() {
//     this.$el.style.display = "block";
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }
// }

// class Box extends GeneralComponent {
//   constructor(options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const boxOne = new Box({
//   selector: "#boxOne",
//   size: 100,
//   color: "green"
// });

// console.log(boxOne);

// class Circle extends Box {
//   constructor(option) {
//     super(option);
//     this.$el.style.borderRadius = option.radius + "%";
//   }
// }

// const circle = new Circle({
//   selector: "#boxRadio",
//   radius: 100,
//   color: "blue",
//   size: 200
// });

// // buttons

// const refs = {
//   hide: document.querySelector(".hide"),
//   show: document.querySelector(".show")
// };

// refs.hide.onclick = () => {
//   boxOne.hide();
// };
// refs.show.onclick = () => {
//   boxOne.show();
// };

// console.log(new Date().getFullYear());

// const buyXBox = 2015;

// const warrantly = [
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2015
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
//     buy: 2015
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
//     buy: 2015
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
//     buy: 2015
//   },
//   {
//     name: "xBox",
//     full: true,
//     id: "4453jb5b4544",
//     isWarrantly: true,
//     buy: 2016
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
//     buy: 2015
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
//   }
// ];

// const change = warrantly => {
//   let hovManyWarrantlyLeft = 0;
//   let hovManyWarrantlyOver = 0;
//   if (!Array.isArray(warrantly)) {
//     return;
//   }

//   warrantly.forEach(elem => {
//     const whenWeBuy = new Date().getFullYear();
//     if (whenWeBuy - elem.buy >= 4) {
//       hovManyWarrantlyOver += 1;
//       elem.isWarrantly = false;
//     } else if (whenWeBuy - elem.buy < 4) {
//       hovManyWarrantlyLeft += 1;
//     }
//   });

//   return { left: hovManyWarrantlyLeft, over: hovManyWarrantlyOver };
// };

// const result = change(warrantly);

// console.log("left", result);

//------ observer ----
const arr = [
  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftoysnbricks.com%2Fwp-content%2Fuploads%2F2012%2F08%2F10229_Front_05.jpg&f=1&nofb=1"
  },
  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.wsj.net%2Fvideo%2F20170102%2F010417legoboost%2F010417legoboost_1280x720.jpg&f=1&nofb=1"
  },
  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F-m9KlMqSMf3A%2FTY7tkUGDJXI%2FAAAAAAAAAL4%2FsRBmxFTer3Q%2Fs1600%2FLEGO%2B8014%2B-%2BClone%2BWalker%2BBattle%2BPack%2B-%2BLegs.JPG&f=1&nofb=1"
  },

  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.eso.org%2Fimages%2Fscreen%2Fann16013d.jpg&f=1&nofb=1"
  },
  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fbtb.net%2Fwp-content%2Fuploads%2F2015%2F12%2FWALL-E-Fix-3.jpg&f=1&nofb=1"
  },
  {
    defaultImage:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsaveabandonedbabies.org%2Fwp-content%2Fuploads%2F2015%2F08%2Fdefault.png&f=1&nofb=1",
    image:
      "https://cdn.shopify.com/s/files/1/1123/3426/products/31039978212_21e8399e80_o.jpg?v=1480257972"
  }
];

const refs = {
  list: document.querySelector(".container")
};

const draw = arr => {
  const getImage = arr.map(
    ({ image, defaultImage }) =>
      `<li class='list-item'><img width= '500px' src ='${defaultImage}' data-photo='${image}'/></li>`
  );
  console.log(getImage);
  refs.list.insertAdjacentHTML("afterend", getImage.join(""));
};

draw(arr);

const options = {
  rootMargin: "50px",
  threshold: 0.5
};

const leazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.target.dataset);
      if (entry.isIntersecting) {
        // console.log(entry.target.dataset.photo);
        entry.target.setAttribute("src", entry.target.dataset.photo);
      }
      // тут можно писать логику для проверки вхождения
    });
  }, {});
  io.observe(target);
};

// observer.observe(elem);

const getAllImage = document.querySelectorAll("img");
const run = document.querySelector(".run");

getAllImage.forEach(image => {
  leazyLoad(image);
});

window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("Scroll event handler invocation every 300ms.");
  }, 1300)
);

let count = 20;

const drive = document.querySelector(".box");
const start = e => {
  let btnHeight = e.target.clientHeight;
  let btnWidth = e.target.clientWidth;
  //   console.log(btnHeight);
  //   console.log(btnWidth);
  let newTop = Math.floor(Math.random() * (window.innerHeight - btnHeight));
  let newLeft = Math.floor(Math.random() * (window.innerWidth - btnWidth));
  //   console.log(window.innerHeight - btnHeight);
  console.log(window.innerHeight - btnHeight);
  e.target.style.top = `${newTop}px`;
  //   console.log(window.innerWidth - btnWidth);
  e.target.style.left = `${newLeft}px`;
};
drive.addEventListener("mouseover", start);

import templateDrawInHtml from "./templates/menu.hbs";
import templateDrawImageInHtml from "./templates/image.hbs";
import products from "./assets/products.json";
import "./style/style.css";

console.log(products);
console.log(templateDrawInHtml(products));

const drawMenu = e => {
  if (e.target.textContent === "SHOW") {
    e.target.textContent = "CLOSE";
  } else if (e.target.textContent === "CLOSE") {
    console.log("closest", (e.target.closest(".box").style.display = "none"));
    // e.target.classList.replace('show', 'hide')
    // e.target.closest(".container").style.display = "none";
  }
  if (document.querySelector(".template") !== null) {
    return;
  }

  document
    .querySelector(".container")
    .insertAdjacentHTML("afterend", templateDrawInHtml(products));
  console.log(document.querySelector(".template").childElementCount);
};

document.querySelector(".show").addEventListener("click", drawMenu);

//--------
const drawImage = () => {
  if (document.querySelector(".imageContainer") !== null) {
    return;
  }
  //   document.querySelector(".container").innerHTML = "";
  document
    .querySelector(".container")
    .insertAdjacentHTML("beforeend", templateDrawImageInHtml(products));
  console.log(document.querySelector(".imageContainer").childElementCount);
};

document.querySelector(".showImage").addEventListener("click", drawImage);

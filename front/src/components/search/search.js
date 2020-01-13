import refs from "../../services";
import "./searchStyle.css";
import "./drawHtml/drawHtml";
// import { draw, users, word } from "./drawHtml/drawHtml";
import * as some from "./drawHtml/drawHtml";
import createInput from "../uniqueInput";

console.log(refs.inputContainer);

console.log(createInput("search", "search"));

refs.inputContainer.insertAdjacentElement(
  "beforeend",
  createInput("search", "search")
);

const getValue = ({ target }) => {
  console.log(target.value);
  some.draw(target.value);
};

if (refs.inputContainer.querySelector(".search")) {
  refs.inputContainer
    .querySelector(".search")
    .addEventListener("input", getValue);
}

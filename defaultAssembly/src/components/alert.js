import idGeneration from "shortid";
import colorGeneration from "randomcolor";
import "../style/style.css";

console.log(idGeneration());
console.log(idGeneration());
console.log(idGeneration());
console.log(idGeneration());
console.log(idGeneration());
console.log(idGeneration());
console.log(idGeneration());

//-------

let color = colorGeneration();

console.log(color);

document.querySelector("h2").style.color = color;

//-------

// joker.getDadJoke(function(joke) {
//   console.log(joke);
// });

// giveMeAJoke.getRandomDadJoke(function(joke) {
//   console.log(joke);
// });

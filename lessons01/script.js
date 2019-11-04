"use strict";
// let someNumber;
// let a = 10;
// let str = "default";
// const obj = {
//   a: 10
// };
// let isActive = true;

// const x = 121;

// str = "Jack";
// a = 321;
// someNumber = a + 12;

// console.log(a);
// console.log(str);
// // console.log(isActive);
// // console.log(x);
// console.log(someNumber);
// obj.a = 121;

// console.log(obj.a);

// let password = 0;

// password = 2345;

// {
//   let random = "string";
//   password = 2345 + random;
// }

// console.log(password);

// console.log(4 + 5 - "9" + 12);

// console.log("someWOrd", "-----", "result");

// console.log(typeof 9);

// console.log(9 === 9);

console.log("------- prompt -------");

// const str = 4;
// console.log(typeof str === "string");
// console.log(typeof str === "number");
// console.log(typeof str);

// let hasUserInfo = prompt("enter some numbers ..");

// const hasUserInfoNumber = Number(hasUserInfo);
// console.log(hasUserInfo);
// console.log(hasUserInfoNumber);
// console.log(hasUserInfo);
// console.log(isNaN(hasUserInfo));

// let message = null;

// if (!isNaN(hasUserInfo)) {
//   message = "yes its number";
// } else {
//   message = " sorrry, not a number";
// }

// console.log(message);

console.log("------------");

// let hasUserInfo = prompt("enter some seasons ..");

// let message = null;

// if (hasUserInfo === "winter") {
//   message = "yes its winter";
// } else if (hasUserInfo === "summer") {
//   message = "yes its summer";
// } else {
//   message = " sorrry, not a seasons";
// }

// console.log(message);

// const hasNumberFirst = Number(prompt("enter first number"));

// const hasNumberSecond = Number(prompt("enter secodnd number"));

// console.log(hasNumberFirst > hasNumberSecond);

// console.log(
//   hasNumberFirst === 10 || hasNumberFirst === 20 || hasNumberFirst === 30
// );

// console.log(hasNumberFirst > 10 || hasNumberFirst < 30);

// if(hasNumberFirst === 10 || hasNumberFirst === 20 || hasNumberFirst === 30){

// }

// const hasUserInfo = confirm("do you want ??");

// console.log(hasUserInfo);

// const hasUserInfo = confirm("do you want a coffee ?");

// // console.log(hasUserInfo);

// if (hasUserInfo) {
//   const getCoffeeInfo = prompt("enter your choice");

//   if (
//     getCoffeeInfo === "late" ||
//     getCoffeeInfo === "latte" ||
//     getCoffeeInfo === "Late" ||
//     getCoffeeInfo === "Latte"
//   ) {
//     alert("tou need to pay 40 uah");
//   } else if (getCoffeeInfo === "amerecano") {
//     console.log(getCoffeeInfo);
//     const withMilk = confirm("with milk ?");
//     if (withMilk) {
//       alert("tou need to pay 30 uah");
//     } else {
//       alert("tou need to pay 25 uah");
//     }
//   }
// } else {
//   console.log("sorry");
// }

const string = "Contrary to popular belief, there are sometimes better";
// console.log(string[]);
// if (string.length > 30) {
//   console.log(string.slice(0, 30));
// }
// console.log(string.length > 30);
// console.log(string.toUpperCase());

const polindrom = prompt("enter word");

if (
  polindrom ===
  polindrom
    .split("")
    .reverse()
    .join("")
) {
  console.log("polindrom");
} else {
  console.log("some words");
}

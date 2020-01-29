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

// console.log("------- prompt -------");

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

// console.log("------------");

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

// const string = "Contrary to popular belief, there are sometimes better";
// console.log(string[]);
// if (string.length > 30) {
//   console.log(string.slice(0, 30));
// }
// console.log(string.length > 30);
// console.log(string.toUpperCase());

// const polindrom = prompt("enter word");

// if (
//   polindrom ===
//   polindrom
//     .split("")
//     .reverse()
//     .join("")
// ) {
//   console.log("polindrom");
// } else {
//   console.log("some words");
// }

//---------- part 2 ----------

// const hasUser = prompt("enter some word ..");
// if (hasUser) {
//   console.log(hasUser);
//   hasUser === "work"
//     ? console.log("work")
//     : hasUser === "JavaScript"
//     ? console.log("JavaScript")
//     : console.log("ne ok");
// } else {
//   console.error("отмена");
// }

//------- циклы ------

// let hesInfo;
// const getNumContinue = Number(prompt("enter number"));

// let count = 0;
// let result = 0;

// while (count < getNum) {
//   count += 1;
//   if (count === getNumContinue) {
//     result = count;
//     continue;
//   }
//   console.log(count);
// }

// console.log("result", result);

//----- цикл while ------

// while (true) {
//   hesInfo = prompt("enter number");

//   if (hesInfo === null) {
//     break;
//   }

//   let getNumber = Number(hesInfo);

//   result = result + getNumber;
// }

// // console.log("общий результат " + result);
// console.log(`общий результат ${result}`);

//------ do while

// do {
//   hesInfo = prompt("enter number");

//   let getNumber = Number(hesInfo);

//   result = result + getNumber;
// } while (hesInfo !== null);

// alert(result);

//----- arr -----

// const arr = [12, 43, 54, 65, 77, 43, 32, 35, 76, 121];
// let count = 0;
// const newArr = [];
// console.log(arr[arr.length -1]);

// for (let index = 0; index <= arr.length; index += 1) {
//   if (arr[index] % 2 === 0) {
//----- push ----
//     newArr.push(arr[index]);
//   }
// }

// console.log(newArr);

// //------ for of ---

// for (let elem of arr) {
//   if (elem % 2 === 0) {
//     newArr.push(elem);
//   }
// }

// console.log(newArr);

let getNumContinue;
const arr = [];

let count = 0;

do {
  getNumContinue = prompt("enter number");

  if (!isNaN(getNumContinue)) {
    arr.push(Number(getNumContinue));
  }
} while (getNumContinue !== null);

console.log(arr);

//------ use for of
// for (let number of arr) {
//   count += number;
// }

//------- use for

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  count += arr[i];
}

console.log(count);

"use strict";

// const arr = [1, 2, 10, [23, 43, 56], "str", 5, 43, 43, 5645, "aas"];

// arr[1] = 121;
// arr[arr.length - 1] = "string";
// // console.log("length", arr.length - 1);

// console.log(arr);

// console.log(arr[3][1]);

//---------- push

// const arr = [1, 2, 105, 43, 43, 5645];

// delete arr[1]; //не юзать

// arr.push(43, 43, 43); //основной
// arr.unshift(121);

// arr.pop();
// arr.shift();

// console.log(arr);

//----------- includes

// const arr = [1, 2, 105, 43, 43, 5645, 43, 43];
// let count = 0;
// for (let num of arr) {
//   //   console.log(num);
// //   if (num === 43) {
// //     count++;
// //     console.log(num);
// //   }

// }

//find unique number

// console.log(arr.includes(105));
// console.log(arr.indexOf(106));

// if (arr.includes(105)) {
//   arr.indexOf(105);
//   arr[arr.indexOf(105)] = 121212;
// }

// console.log(arr);

//---------- slice / splice ---

// const arr = [1, 2, 105, 44, 43, 5645, 41, 143];

// const newArr = arr.slice();

// console.log(arr);
// newArr.push(32, 32, 4, 54, 65, 76);

// // const result = newArr.slice(4);
// // console.log(result);
// const result = newArr.splice(5, 1, "delete");

// console.log(result);

// console.log(newArr);
// const arr = [1, 2, 105, 44, 43, 5645, 41, 143];
// let findNumber = 143;

// for (let num of arr) {
//   console.log(num);
//   if (num === findNumber) {
//     arr.splice(arr.indexOf(findNumber), 1, `delete ${findNumber}`);
//   }
// }

// console.log(arr);

// let words =
//   "React is pretty hot stuff right now. I have been working with it for a while now. As I was coming up to speed there were a lot of sticky points to it that I didn’t understand well and felt like a wall, A big one.";

// let text = words.split("");
// let without = [];
// console.log(text);

// let count = 0;

// for (let elem of text) {
//   console.log(elem);
//   if (elem === " ") {
//     count++;
//     // without.push(elem);
//   }
// }

// // console.log(without.join(""));

// console.log(count);

// console.log(words.split(" ").length);

// console.log(
//   words
//     .split("")
//     .splice(0, 30)
//     .join("")
// );

// console.log(words.split(" "));

//--------- function ------

//-- function declaration

function add(a, b) {
  let result = a * b;
  return result;
}

// const result = add(21, 23, 43);
// console.log(result);

//-------- function expretion

// const fn = function(...rest) {
//   //вызов arguments вернет псевдомасив
//   //   const arrTranform = Array.from(arguments);
//   //   console.log(arrTranform);
//   console.log(rest);
// };

// fn(1, 2, 34, 5, 6, 7, 7, 34, 43, 6, 78, 89, 1);

//with ...rest
const shortFn = (arr, ...rest) => {
  console.log(arr);
  console.log(rest);
  let con = arr.concat(rest);
  console.log(con);
};

const arr = [4, 5, 6];

shortFn(arr, 3, 3, 35, 5, 6);

// const shortFn = (a, b) => {
//   let res = a * b;
// };

// const result = shortFn(4, 2);
// console.log(result);

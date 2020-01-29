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

// function add(a, b) {
//   let result = a * b;
//   return result;
// }

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
// const shortFn = (arr, ...rest) => {
//   console.log(arr);
//   console.log(rest);
//   let con = arr.concat(rest);
//   console.log(con);
// };

// const arr = [4, 5, 6];

// shortFn(arr, 3, 3, 35, 5, 6);

// const shortFn = (a, b) => {
//   let res = a * b;
// };

// const result = shortFn(4, 2);
// console.log(result);

//----------- part 2 ------- function

const arr = [1, 2, 34, 5, 6, 7, 7, 34, 43, 6, 78, 89, 1];

const fn = function(arr) {
  const result = someUse(arr);
  const returnMult = mult(result);
  message(returnMult);
};

const someUse = function(par) {
  const newArr = [];
  for (let elem of par) {
    if (elem > 20) {
      newArr.push(elem);
    }
  }

  return newArr;
};

const message = function(res) {
  console.log(res);
};

const mult = function(mass) {
  const arr = [];
  for (let elem of mass) {
    let res = elem * elem;
    arr.push(res);
  }
  return arr;
};

// fn(arr);

// const choose = prompt("choose ...");

const show = function(arr, choose) {
  if (choose === "multiply") {
    console.log(mult(arr));
  } else if (choose === "more") {
    console.log(someUse(arr));
  } else {
    message("some text");
  }
};

// show(arr, choose);

//------------ task --------

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = function(first, second, num) {
  // console.log(arr.includes());

  // --- use only spred operator ...spred
  const newArr = [...first, ...second];
  // newArr.push("dsfd", "fdfd");
  // console.log(newArr);
  const mass = [];

  for (let elem of newArr) {
    if (!mass.includes(elem)) {
      mass.push(elem);
    }
  }
  return mass;
};

// Вызовы функции для проверки
console.log(filterFromArray([1, 2, 3, 4, 5, 2], [4, 4, 45, 68, 9, 9, 5]));
// [1, 3, 5]

// console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

// console.log(window);

// const unique = function(callback) {
//   console.log(fn1);
//   // callback();
// };

// unique(() => {
//   console.log("work");
// });

//------- create aesy calculator ---------

const numberFirst = Number(prompt("enter num ..."));
const calculations = prompt("enter num ...");
const numberSecond = Number(prompt("enter num ..."));

const calculator = (plus, minus, multi) => {
  // Math.floor(Math.random() > 0.5) ? one() : two();
  if (!isNaN(calculations) === "+") {
    return plus(numberFirst, numberSecond);
  } else if (!isNaN(calculations) === "-") {
    return minus(numberFirst, numberSecond);
  } else if (!isNaN(calculations) === "*") {
    return multi(numberFirst, numberSecond);
  } else {
    console.error("eeeeeer");
  }
};

const plus = (parOne, paramTwo) => {
  return parOne + paramTwo;
};

const result = calculator(
  plus,
  (parOne, paramTwo) => {
    return parOne - paramTwo;
  },
  (parOne, paramTwo) => {
    return parOne * paramTwo;
  }
);

console.log(result);

// проверка на ввод числа

// const someFn = (a, b) => {
//   // if (typeof a === "string" || typeof b === "string") {
//   //   return;
//   // }
//   console.log(a + b);
// };

// // someFn(3, "5");

// someFn(3, "5");

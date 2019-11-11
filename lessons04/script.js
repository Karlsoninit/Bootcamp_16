"use strict";
// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true }
// ];

// const fn = (fruits, name) => {
//   const arr = [];
//   for (let fruit of fruits) {
//     // fruit.name === name && arr.push(fruit);

//     if (filter(fruit.name, name)) {
//       arr.push(fruit);
//     }
//   }

//   return arr;
// };

// const filter = (objName, name) => objName === name;

// const result = fn(fruits, "bananas");

// console.log(result);

//-------- callback

//массив
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true }
];

const fn = (fruits, filter) => {
  const arr = [];
  //filter функция которую получили в ввиде аргумента
  if (!Array.isArray(fruits)) {
    console.log("лось");
    return;
  }
  //цикл для перебора
  for (let fruit of fruits) {
    //записываем пезультат выполнения функции в перемен. findMore
    const findMore = filter(fruit);
    //условия для проверки
    if (findMore) {
      //пушим обьект который прошел проверку через callback findMore (которая вернула true или false)
      arr.push(fruit);
    }
  }
  return arr;
};

//функция которая передается в fn как callback function в ввиде аргументов
const filter = function({ quantity }) {
  // в теле фукции выполянем сравнение для фильтрации и результат который получаем возвращаем как true или false
  return quantity >= 150;
};

const result = fn(fruits, filter);
// console.log(result);

// const result = fn(fruits, function(object) {
//   return object.quantity > 150;
// });

// const result = fn(fruits);
// результат выполнения fn() в перем. result
// console.log(result);

//----------- замыкание ------

const counter = par => {
  console.log(par);
  const increment = num => {
    console.log(num);
    console.log(par * num);
  };

  return increment;
};

// const total = counter(10);
// counter();
// // console.log(total);

// total(10);

// const doubleTotal = counter(5);
// counter();

// doubleTotal(2);
// const hasUserName = prompt("enter your name ...");
const shop = buyer => {
  let count = 0;
  let discount = 0;
  console.log(buyer);

  return () => {
    count++;
    if (count > 3 && count < 6) {
      discount = 10;
    } else if (count >= 6) {
      discount = 20;
    }
    console.log(`привет ${buyer} вы купили ${count} и получили ${discount}%`);
  };
};

// const Jon = shop("Jon");

// Jon();
// Jon();
// Jon();
// Jon();
// Jon();

// Jon();
// Jon();

// const Stepan = shop("Stepan");
// Stepan();
// Stepan();
// Stepan();
// Stepan();
// Stepan();
// Stepan();
// Stepan();
// Jon();
// Jon();
// Jon();
// Jon();
// Stepan();
// Stepan();
// Stepan();
// Stepan();

//--------- this ---------

const showAboutUser = function() {
  console.log(this);
  console.log(this.name);
};

const user = {
  name: "Jon",
  work: "frontend",
  show: function() {
    console.log(this);
    console.log(this.work);
  }
};

const girl = {
  name: "Jina",
  work: "backend"
};

// showAboutUser.call(user);
// showAboutUser.call(girl);
const res = user.show.bind(girl);

res();

console.log("Lessons_03");

// let key = "name";
// let value = "Chuck";

// const user = {
//   name: "name",
//   lastName: "Norris",
//   age: null,
//   fight: true,
//   hobbies: ["fight", "fight", "fight", "swim", "run", "flight"],
//   showName: function() {
//     return `${user.name} ${user.age}`;
//   }
// };

// user.name = "Chuck";
// user.age = 61;
// user.films = [];

// console.log(user);

//------------- add new value in object

// const name = prompt("enter name ..");
// const lastName = prompt("enter lastName ..");
// const age = Number(prompt("enter age .."));
// const igree = confirm("enter age ..");

// let hobbies;
// let mass = [];
// const user = {
//   name,
//   lastName,
//   age,
//   moreInformations: function() {
//     do {
//       hobbies = prompt("enter  hobbies..");
//       mass.push(hobbies);
//     } while (hobbies !== null);
//   },
//   info: mass,
//   show: function() {
//     console.log(user.lastName);
//   },
//   start: function() {
//     user.moreInformations();
//     user.show();
//   }
// };

// if (igree) {
//   user.start();
// }

// console.log(user);
// console.log(mass);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

//--------- delete ------

const user = {
  name: "Chuck",
  lastName: "Norris",
  age: 34,
  fight: true,
  hobbies: ["fight", "fight", "fight", "swim", "run", "flight"]
};

// delete user.lastName; //deelte

// console.log(user);

// const fruits = {
//   apple: 120,
//   grapes: 32,
//   bananas: 12
// };

// let total = 0;

// for (let fruit in fruits) {
//   console.log(fruits[fruit]);
//   total += fruits[fruit];
// }

// console.log(total);
// console.log(fruits);

// const key = Object.keys(fruits);
// console.log(key);

// const value = Object.values(fruits);
// console.log(value);

// const entries = Object.entries(fruits);
// console.log(entries);

// for (let mass of entries) {
//   //   console.log(mass);
//   console.log(mass[0], mass[1]);
// }

//--------- task ----

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true }
];

// console.log(fruits);

const find = (mass, name) => {
  const arr = [];
  for (let fruit of mass) {
    // console.log(fruit);
    fruit.name === name ? arr.push(fruit) : null;
  }
  return arr;
};

const result = find(fruits, "bananas");

console.log(result);

//------------

// const apples = { name: "apples", quantity: 200, isFresh: true };

// const grapes = { name: "grapes", quantity: 150, isFresh: false };

// let mix = { ...apples, ...grapes, count: 122 };

// console.log("mix", mix);
// console.log("apples", apples);
// console.log("grapes", grapes);

//------------- fetch

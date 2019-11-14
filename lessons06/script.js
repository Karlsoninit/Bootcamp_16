console.log("work");

// const multy = mass => {
//   const newArr = [];
//   for (let i = 0; i < mass.length; i++) {
//     console.log(mass[i], mass[i] * 2);
//     newArr.push(mass[i] * 2);
//   }

//   return newArr;
// };

// const numbers = [1, 2, 3, 4, 5];

// const result = multy(numbers);
// console.log(result);
// console.log(numbers);

//-----------------

// const numbers = [2, 3, 4, 5, 4, 5, 7, 8];

// console.log(numbers);
// const unuque = [];

// //--------- forEach

// numbers.forEach(function(elem) {
//   // console.log(typeof elem === "number");
//   // elem > 5 && unuque.push(elem);
// });

// console.log(unuque);

//--------- map --------
// let total = 0;
// const returnMap = numbers.map(elem => (total += elem));

// console.log(returnMap);

// //--------- filter --------

// const returnFilter = numbers.filter(el => el > 5);

// console.log(returnFilter);

// //--------- find --------

// const returnFind = numbers.find((elem, ind) => elem >= 5);

// console.log(returnFind);

// //--------- some --------

// const returnSome = numbers.some(elem => elem > 4);

// console.log(returnSome);

// //--------- every --------

// const returnevery = numbers.every(elem => typeof elem === "number");

// console.log(returnevery);

//------- reduce -------

// const numbers = [2, 3, 4, 5, 4, 5, 7, 8];

// const resturdReduce = numbers.reduce((acc, elem) => {
//   acc.push(elem * 2);
//   return acc;
// }, []);

// console.log(resturdReduce);

//--------------

const numbers = [
  [2, 3, 4, 5],
  [4, 5, 7, 8],
  [4, 7, 8]
];

const fn = mass => {
  const uniqueArr = mass[0].concat(mass[1]);
  const uniqueArrSpred = [...mass[0], ...mass[1]];
  console.log(uniqueArr);
  const arr = [];
  const unique = [];
  console.log(mass);
  for (let i = 0; i < mass.length; i++) {
    console.log(mass[i]);
    for (let j = 0; j < mass[i].length; j++) {
      // console.log(mass[i][j]);
      arr.push(mass[i][j]);
      // console.log(!unique.includes(mass[i][j]));
      if (!unique.includes(mass[i][j])) {
        unique.push(mass[i][j]);
      }
    }
  }
  console.log(arr);
  console.log("new Set", [...new Set(uniqueArrSpred)]);
  console.log(unique);

  // if(unique.includes())
};

const result = fn(numbers);

console.log(result);

const someReduce = numbers.reduce((acc, elem) => {
  acc.push(...elem);
  return [...new Set(acc)];
}, []);

console.log(someReduce);

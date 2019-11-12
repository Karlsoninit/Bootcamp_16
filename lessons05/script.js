// const shop = {
//   cashier: "Julia",
//   products: [],
//   sale: function(product) {
//     // console.log(this.products.length);
//     this.products.push(product);
//   },
//   all: function() {
//     const count = this.products.length;
//     console.log(
//       `продавец: ${this.cashier}, продала ${count}, прод товар [${this.products}]`
//     );
//   }
// };

// shop.sale("apple");
// shop.sale("banannas");
// shop.all();
// //-----------
// console.log(shop);

//------------ constructor ------- Shop ---------
//массив в котором храним товары для продажи в магазине
const fruits = [
  { name: "apples", quantity: 200, isFresh: true, price: 30 },
  { name: "grapes", quantity: 150, isFresh: false, price: 70 },
  { name: "bananas", quantity: 100, isFresh: true, price: 27 }
];

// функция конструктор
const Shop = function(name, mass) {
  //name - имя касира, mass - массив с товаром параметры
  this.cashier = name;
  this.fruits = mass;
  this.products = [];
  //метод для которы вызывается каждый раз при продаже
  //принимает параметры product - товар который нужно найти в массиве this.fruits и количество - count
  this.sale = function(product, count) {
    let bil = null; // общий счет
    let newObj = null; // новый обьект
    for (let fruit of this.fruits) {
      //функция которая не дает провести продажу если товар isFrash: false
      //   if (!fruit.isFresh) {
      //     console.log(`${fruit.name} ---> is not fresh`);
      //выходит с функции каждый раз при не сведем товаре
      //     return;
      //   }
      if (fruit.name === product) {
        //проверка на остаток товара quantity в увждом обьекте при следующей продаже
        if (fruit.quantity < count) {
          console.error(
            `столько ${fruit.name} нет на складе остфток ${count -
              fruit.quantity} !!!!`
          );
          return;
        }
        if (!fruit.isFresh) {
          //присваивает скидку - 50% если товар не свежий
          bil = (count * fruit.price) / 2;
        } else {
          bil = count * fruit.price;
        }
        //создает новый обьект с остатком quantity после каждой прод
        newObj = { ...fruit, quantity: fruit.quantity - count };
      }
    }
    //пушит в массив новый обьект с остатком quantity
    fruits.push(newObj);

    console.log(this.fruits);
    console.log(bil);
  };
  this.all = function() {
    return this.products;
  };
};

// вызовы для провеки по каждому продавцу по отдельности

// const cashierAm = new Shop("Julia", fruits);
// cashierAm.sale("grapes", 13);
// cashierAm.sale("grapes", 20);
// cashierAm.sale("grapes", 12);
// cashierAm.sale("grapes", 170);
// cashierAm.sale("apples", 240);
// cashierAm.sale("bananas", 4);

//----------
// console.log(cashierAm);

// const cashierPm = new Shop("Tanya");
// cashierPm.sale("banannas");
// const returnCashierPm = cashierPm.all();
// console.log(cashierPm);

// console.log(returnCashierAm);
// console.log(returnCashierPm);

// const allProducts = [...returnCashierAm, ...returnCashierPm];

// console.log(allProducts);

const cashierPm = new Shop("Tanya", fruits);

cashierPm.sale("grapes", 20);
cashierPm.sale("grapes", 120);
cashierPm.sale("grapes", 4);
cashierPm.sale("grapes", 1);

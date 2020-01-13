// const work = () => {
//   console.log("work--- 2");
//   result = "work";
// };

// const delay = 2000;

// setTimeout(work, delay);

// let result = "";

// setTimeout(() => {
// }, 2100);
// console.log("result --- 1", result);

// setInterval(()=>{
//     console.log(new Date().getSeconds())
// }, 5000)

const shooter = local => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        localhost: local
      });
    }, 5000);
  });

  //   return Promise.resolve({ localhost: local });
};

console.log(shooter());
shooter({ test: "work" })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// shooter(8080)
//   .then(data => {
//     console.log(data);
//     data.localhost = 4321;
//     data.port = 9000;
//     return data;
//   })
//   .then(d => {
//     d.provider = "Volia";
//     return data;
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// (() => {
//   return Promise.resolve("promise");
// })().then(console.log);

// console.log("console");
// console.log("one");
// console.log("two");
// console.log("three");

// const getNews = () => {
//   return fetch(
//     "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
//   );
// };
// getNews()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// setInterval(() => {
//   console.log(window.outerWidth);
// }, 300);

document.addEventListener("offline", () => {
  console.log("online");
  console.log(window.innerWidth);
});

window.addEventListener("load", () => {
  console.log("offline");
  console.log(window.innerWidth);
});

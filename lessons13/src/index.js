import axios from "axios";

console.log("work");
const key = "14452993-a97f0aeb82bfc4ebb60896535";
// if (window.location.host !== "localhost:8081") {
//   alert("worng port ");
// }

// navigator.geolocation.getCurrentPosition(
//   success => {
//     console.log(success.coords);
//     console.log(success.coords.latitude);
//     console.log(success.coords.longitude);
//   },
//   error => {
//     console.log(error);
//   }
// );

// console.log("navigator", window.navigator);

// console.log("location", window.location.host);

//-------- async -----

// const getNews = async () => {
//   const result = await axios(
//     "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
//   );
//   const data = result.data.articles;

//   //   console.log(data);
//   return data;
// };

// console.log(getNews());

// getNews().then(console.log);

//-------- then ----

// const getNews = () => {
//   return axios(
//     "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
//   ).then(data => {});
// };

// // console.log(getNews());

// // getNews().then(console.log);

// getNews();

//-------

// const getNews = async () => {
//   try {
//     const data = await axios(
//       "https://newsapi.org/v2/everything?q=bitcoin&apiKey=86efb1d9e5074721b8f151f282c7bcf7"
//     );
//     const getArrNews = data.data.articles;
//     return getArrNews;
//   } catch (error) {
//     console.log("error -------------> ", error);
//     throw error;
//   }
// };

// const result = getNews();
// console.log(result);

// async function drawNews(news) {
//   const newsTransform = await news;

//   newsTransform.map(elem => console.log(elem));
// }

// drawNews(result);

// result.then(console.log);

const drawHTML = arr => {
  console.log(arr);
  document.body.insertAdjacentHTML(
    "beforeend",
    arr.map(elem => `<img width="400" src="${elem.largeImageURL}" />`)
  );
};

console.log("innerWidth ----------> ", window.innerWidth);
axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;

const changeinternet = async name => {
  try {
    if (window.clientInformation.connection.downlink < 3) {
      const nextStep = confirm("slow internet, continue ?");
      if (nextStep) {
        const data = await axios(`&q=${name}&per_page=4&page=${1}`);

        drawHTML(data.data.hits);
      } else {
        alert("sorry, wait fast inetrnet");
        return;
      }
    } else if (window.innerWidth < 500) {
      const data = await axios(`&q=${name}&per_page=10&page=${1}`);
      console.log(data.data.hits);
      drawHTML(data.data.hits);
    } else {
      const data = await axios(`&q=${name}&per_page=70&page=${1}`);
      // console.log('-----', data);
      drawHTML(data.data.hits);
    }
  } catch (err) {
    console.log("-----------> ", err);
    throw err
  }
};

changeinternet("car");


// https://pixabay.com/api/?key=14452993-a97f0aeb82bfc4ebb60896535&q=${name}&per_page=70&page=${page}
import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org";
const key = "86efb1d9e5074721b8f151f282c7bcf7";
let count = 1;
const refs = {
  form: document.querySelector(".form"),
  newsContainer: document.querySelector(".newsContainer"),
  btnContainer: document.querySelector(".btnContainer")
};

const getNews = (name = "apple", page = 1) => {
  return axios.get(`/v2/everything?q=${name}&page=${count}&apiKey=${key}`);
};

getNews()
  .then(({ data: { articles } }) => {
    // console.log(articles);
    const drawNews = articles
      .map(
        article =>
          `<a target='_blank' href='${article.url}' ><img width= '400' src='${article.urlToImage}'/></a>`
      )
      .join("");
    // console.log(drawNews);
    refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
  })

  .catch(error => console.error("LoL errrrrror", error));

const handleSubmitForm = evt => {
  evt.preventDefault();
  refs.newsContainer.innerHTML = "";
  console.log(evt.target.elements[0].value);
  const getValueForm = evt.target.elements[0].value;
  getNews(getValueForm, 1).then(({ data: { articles } }) => {
    const drawNews = articles
      .map(article => `<img width= '400' src='${article.urlToImage}'/>`)
      .join("");

    refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
  });
};

refs.form.addEventListener("submit", handleSubmitForm);

refs.btnContainer.addEventListener("click", evt => {
  console.log(evt.target);
  if (evt.target.textContent === "next") {
    console.log("next");
    count++;
    getNews("apple", count).then(({ data: { articles } }) => {
      const drawNews = articles
        .map(article => `<img width= '400' src='${article.urlToImage}'/>`)
        .join("");

      refs.newsContainer.insertAdjacentHTML("beforeend", drawNews);
    });
    console.log(count);
  } else if (evt.target.textContent === "prev") {
    console.log("prev");
    count--;
    console.log(count);
  }
});

console.log(count);


window.addEventListener('change', (evt) => {
  console.log(evt)
})
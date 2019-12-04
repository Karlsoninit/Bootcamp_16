import axios from "axios";
import "./style.css";
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

// const drawHTML = arr => {
//   console.log(arr);
//   document.body.insertAdjacentHTML(
//     "beforeend",
//     arr.map(elem => `<img width="400" src="${elem.largeImageURL}" />`)
//   );
// };

// console.log("innerWidth ----------> ", window.innerWidth);
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;

// const changeinternet = async name => {
//   try {
//     if (window.clientInformation.connection.downlink < 3) {
//       const nextStep = confirm("slow internet, continue ?");
//       if (nextStep) {
//         const data = await axios(`&q=${name}&per_page=4&page=${1}`);

//         drawHTML(data.data.hits);
//       } else {
//         alert("sorry, wait fast inetrnet");
//         return;
//       }
//     } else if (window.innerWidth < 500) {
//       const data = await axios(`&q=${name}&per_page=10&page=${1}`);
//       console.log(data.data.hits);
//       drawHTML(data.data.hits);
//     } else {
//       const data = await axios(`&q=${name}&per_page=70&page=${1}`);
//       // console.log('-----', data);
//       drawHTML(data.data.hits);
//     }
//   } catch (err) {
//     console.log("-----------> ", err);
//     throw err
//   }
// };

// changeinternet("car");

// https://pixabay.com/api/?key=14452993-a97f0aeb82bfc4ebb60896535&q=${name}&per_page=70&page=${page}

//async ------

const refs = {
  container: document.querySelector(".usersContainer")
};

class Post {
  constructor(url) {
    this.url = url;
  }

  async getAllUsers() {
    const user = await axios.get(`${this.url}/users`);
    // console.log("users", user.data);
    return user.data;
  }

  async getUser(id) {
    const user = await axios.get(`${this.url}/users/${id}`);
    return user.data;
  }

  async getUserPosts(id) {
    const user = await axios.get(`${this.url}/posts?userId=${id}`);
    return user.data;
  }

  async getUserComments(postId) {
    const user = await axios.get(`${this.url}	/comments?postId=${postId}`);
    return user.data;
  }
}

const post = new Post("https://jsonplaceholder.typicode.com");

// console.log(post);

const menu = async () => {
  const userId = await post.getUser(3);
  // console.log(userId);
  const posts = await post.getUserPosts(userId.id);
  // console.log(posts);
  const comment = await post.getUserComments(posts[0].id);
  // console.log(comment);
};

menu();

//----------- draw -----------

const drawUsers = async () => {
  const users = await post.getAllUsers();
  refs.container.insertAdjacentHTML(
    "beforeend",
    users
      .map(
        user => `<li id='${user.id}' class='userInfo'>
  <h2>${user.name}</h2>
</li>`
      )
      .join("")
  );
  console.log("users", users);
};

drawUsers();

const getPosts = async e => {
  console.log("closest", e.target.closest(".userInfo"));
  const userId = e.target.closest(".userInfo").id;
  const posts = await post.getUserPosts(userId);
  console.log(posts);
  //----post

  e.target.closest(".userInfo").insertAdjacentHTML(
    "beforeend",
    posts
      .map(
        post => `<ul>
  <li id='${post.id}' class='post'><p>${post.title}</p></li>
  </ul>`
      )
      .join("")
  );
  // console.log("comment", e.target.closest(".post").id);

  const comments = await post.getUserComments(e.target.closest(".post").id);
  console.log(comments);

  e.target.closest(".post").insertAdjacentHTML(
    "beforeend",
    comments
      .map(
        comment => `<ul>
  <li id='${comment.id}' class='post'><p>${comment.name}</p></li>   
  </ul>`
      )
      .join("")
  );
};

//---------- commit ------

refs.container.addEventListener("click", getPosts);

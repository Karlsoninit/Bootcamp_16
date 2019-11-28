import axios from "axios";
import "./style/style.css";
const refs = {
  form: document.querySelector(".form"),
  logout: document.querySelector(".logout")
};

if (localStorage.getItem("isAuthorization")) {
  refs.form.style.display = "none";
  refs.logout.querySelector(".title").textContent = localStorage.getItem(
    "name"
  );
  refs.logout.style.display = "block";
} else {
  refs.form.style.display = "block";
  refs.logout.style.display = "none";
}

console.log(localStorage.getItem("isAuthorization"));

const handleSubmitForm = evt => {
  evt.preventDefault();
  console.log(evt.target);

  const register = {};
  const getFormInfo = new FormData(evt.target);
  console.log(getFormInfo);
  getFormInfo.forEach((value, name) => {
    console.log(value, "----", name);
    register[name] = value;
  });

  //   console.log(register.email);

  axios
    .get("http://localhost:4321/authorization")
    .then(({ data }) => {
      let key = true;
      data.forEach(({ email }) => {
        if (email === register.email) {
          console.warn("уже есть");
          key = false;
        }
      });
      return key;
    })
    .then(data => {
      console.log("then register ", register);
      console.log("data", data);
      localStorage.setItem("isAuthorization", data);
      localStorage.setItem("name", register.login);
      if (data) {
        refs.form.style.display = "none";
        refs.logout.querySelector(".title").textContent = localStorage.getItem(
          "name"
        );
        refs.logout.style.display = "block";
        axios
          .post("http://localhost:4321/authorization", register)
          .then(data => console.log(data));
      }
    });
};

refs.form.addEventListener("submit", handleSubmitForm);

refs.logout.querySelector(".btn").addEventListener("click", () => {
  console.log("work");
  localStorage.setItem("isAuthorization", false);
  refs.form.style.display = "block";
  refs.logout.style.display = "none";
});

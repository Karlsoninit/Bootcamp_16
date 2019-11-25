import shortid from "shortid";
import "./styles/style.css";
import servises from "./components/services";

// console.log(servises.refs.form);
servises.defaultDrawTask();
function handleOfSubmit(evt) {
  evt.preventDefault();
  const task = {};
  const resultData = new FormData(evt.target);
  console.log(resultData);
  resultData.forEach((value, name) => {
    task[name] = value;
    task.id = shortid();
  });

  servises.tasks.push(task);
  servises.createTask(task);
  localStorage.setItem("tasks", JSON.stringify(servises.tasks));
  evt.target.elements[0].value = "";
  // evt.target.reset();
}

servises.refs.form.addEventListener("submit", handleOfSubmit);

const handleDeleteTask = evt => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  console.log(evt.target.parentNode.id);
  console.log(evt.target)
  servises.deleteTask(evt.target.parentNode.id)
};

servises.refs.tasksContainer.addEventListener("click", handleDeleteTask);

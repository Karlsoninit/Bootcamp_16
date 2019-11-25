import task from "../templates/task.hbs";

export default {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
  refs: {
    form: document.querySelector(".form"),
    tasksContainer: document.querySelector(".tasksContainer"),
    formContainer: document.querySelector(".formContainer")
  },

  defaultDrawTask() {
    const getTasks = this.tasks.map(elem => task(elem)).join("");
    this.refs.tasksContainer.insertAdjacentHTML("beforeend", getTasks);
  },
  deleteTask(id) {
    this.refs.tasksContainer.innerHTML = "";
    console.log(id);
    const afterDelete = (this.tasks = this.tasks.filter(
      elem => elem.id !== id
    ));
    localStorage.setItem("tasks", JSON.stringify(afterDelete));
    console.log(afterDelete);
    console.log(this.tasks);
    this.defaultDrawTask()
  },
  priorityTask() {},
  createTask(elem) {
    this.refs.tasksContainer.insertAdjacentHTML("beforeend", task(elem));
  }
};

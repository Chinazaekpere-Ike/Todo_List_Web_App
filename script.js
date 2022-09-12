function formActions(event) {
  event.preventDefault();
  let formInput = document.querySelector("#new-task-input");
  let taskList = document.querySelector("#tasks");
  let task = formInput.value;

  if (task.length < 1) {
    alert("Please fill a valid task");
    return;
  }

  let task_el = document.createElement("div");
  task_el.classList.add("task");

  let task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  let task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  taskList.appendChild(task_el);
  task_el.appendChild(task_content_el);
  task_content_el.appendChild(task_input_el);
}

function gettingHTML() {
  let form = document.querySelector("#new-task-form");
  form.addEventListener("submit", formActions);
}

window.addEventListener("load", gettingHTML);

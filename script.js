function formActions(event) {
  event.preventDefault();
  let formInput = document.querySelector("#new-task-input");
  let taskList = document.querySelector("#tasks");
  let task = formInput.value;

  if (task.length < 1) {
    alert("Please write something");
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

  let task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  let task_done_el = document.createElement("button");
  task_done_el.classList.add("done");
  task_done_el.innerHTML = `<i class="fa-solid fa-check"></i>`;

  let task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerHTML = `<i class="fa-solid fa-pencil"></i>`;

  let task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

  task_el.appendChild(task_done_el);

  taskList.appendChild(task_el);
  task_el.appendChild(task_content_el);
  task_content_el.appendChild(task_input_el);

  task_el.appendChild(task_actions_el);
  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  formInput.value = "";
}

function gettingHTML() {
  let form = document.querySelector("#new-task-form");
  form.addEventListener("submit", formActions);
}

window.addEventListener("load", gettingHTML);

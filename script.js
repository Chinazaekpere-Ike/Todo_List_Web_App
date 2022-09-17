function currentDate() {
  let dateDisplay = document.querySelector("#date");

  let now = new Date();
  let daysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = daysofWeek[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  if (hour > 12) {
    hour = hour - 12;
    dateDisplay.innerHTML = `${day}, ${hour}:${minute} PM
        <br />
        ${date}/${month}/${year}`;
  } else {
    dateDisplay.innerHTML = `${day}, ${hour}:${minute} AM
        <br />
        ${date}/${month}/${year}`;
  }
}

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
  task_input_el.maxLength = "70";
  task_input_el.setAttribute("readonly", "readonly");

  let task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  let task_done_el = document.createElement("button");
  task_done_el.classList.add("done");
  task_done_el.innerHTML = `<i class="fa-regular fa-square"></i>`;

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

  task_edit_el.addEventListener("click", function editButton() {
    if (task_edit_el.innerHTML == `<i class="fa-solid fa-pencil"></i>`) {
      task_edit_el.innerHTML = `<i class="fa-solid fa-sd-card"></i>`;
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_input_el.setAttribute("readonly", "readonly");
      task_edit_el.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    }
  });

  task_done_el.addEventListener("click", function doneButton() {
    if (task_done_el.innerHTML == `<i class="fa-regular fa-square"></i>`) {
      task_done_el.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
      task_input_el.classList.add("strike-through");
    } else {
      task_done_el.innerHTML = `<i class="fa-regular fa-square"></i>`;
      task_input_el.classList.remove("strike-through");
    }
  });

  task_delete_el.addEventListener("click", function deleteButton() {
    taskList.removeChild(task_el);
  });
}

function gettingHTML() {
  let form = document.querySelector("#new-task-form");
  form.addEventListener("submit", formActions);
}

window.addEventListener("load", gettingHTML);

currentDate();

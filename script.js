function formActions(event) {
  event.preventDefault();
  let formInput = document.querySelector("#new-task-input");
  let taskList = document.querySelector("#tasks");
  let task = formInput.value;

  if (task.length < 1) {
    alert("Please fill a valid task");
  } else {
    console.log("success");
  }
}

function gettingHTML() {
  let form = document.querySelector("#new-task-form");
  form.addEventListener("submit", formActions);
}

window.addEventListener("load", gettingHTML);

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const CHECKED_KEY = "checked";

let toDos = [];
let saveCheck = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(event) {
  const li = event.target.parentElement;
  const checkId = event.path[1].id;
  const checkbox = li.childNodes[0];
  if (checkbox.checked) {
    const newCheckObj = {
      checked: checkbox.checked,
      id: parseInt(checkId),
    };
    saveCheck.push(newCheckObj);
    localStorage.setItem(CHECKED_KEY, JSON.stringify(saveCheck));
  } else if (checkbox.checked === false) {
    saveCheck = saveCheck.filter((check) => check.id !== parseInt(checkId));
    localStorage.setItem(CHECKED_KEY, JSON.stringify(saveCheck));
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  checkbox.addEventListener("change", checkToDo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function changeCheck(event) {
  const checked = event.checked;
  const id = event.id;
  const li = document.getElementById(id);
  li.childNodes[0].checked = checked;
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedChecks = localStorage.getItem(CHECKED_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedChecks !== null) {
  const parsedChecks = JSON.parse(savedChecks);
  saveCheck = parsedChecks;
  parsedChecks.forEach(changeCheck);
}

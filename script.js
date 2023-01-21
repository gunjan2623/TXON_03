const inputField = document.querySelector(".input-field textarea"),
  todolist = document.querySelector(".todolist"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length === 0 ? "No" : tasks.length;
  let allList = document.querySelectorAll(".list");
  if (allList.length > 0) {
    todolist.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todolist.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `
      <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
      </li>`;
    todolist.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
  }
});
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}
function deleteTask(e) {
  e.parentElement.remove();
  allTasks();
}

clearButton.addEventListener("click", () => {
  todolist.innerHTML = "";
  allTasks();
});

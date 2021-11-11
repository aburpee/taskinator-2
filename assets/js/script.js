var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do")
var formEl = document.querySelector("#task-form")

var createTaskHandler = function () {

    event.preventDefault()

    var listItemEl = document.createElement("li")
    listItemEl.className = "task-item"
    listItemEl.textContent = "Another Task"
    tasksToDoEl.appendChild(listItemEl)

    
}


formEl.addEventListener("submit", createTaskHandler);



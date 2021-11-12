var tasksToDoEl = document.querySelector("#tasks-to-do")
var formEl = document.querySelector("#task-form")

var taskFormHandler = function (event) {

    event.preventDefault()
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);

    //doesnt allow  user to leave form blank
    if (!taskNameInput || !taskTypeInput) {
        alert("you need to fill out the task form")
        return false;
    }
    //resets form content after "add task"
    formEl.reset();

}

var createTaskEl = function(taskDataObj) {
    //creates list item
    var listItemEl = document.createElement("li")
    listItemEl.className = "task-item"

    //creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div")
    taskInfoEl.className = 'task-info'
    
    //add html content to div
    taskInfoEl.innerHTML = "<h3 class-'task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>" + taskDataObj.type + "</span>"
    listItemEl.appendChild(taskInfoEl);
    
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl)


}

formEl.addEventListener("submit", taskFormHandler);



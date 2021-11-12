var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");
var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");

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

    //add task id as a customer attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div")
    taskInfoEl.className = 'task-info'
    
    //add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>" + taskDataObj.type + "</span>"
    listItemEl.appendChild(taskInfoEl);
    
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl)

    taskIdCounter++;


}

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create edit button
    var editButtonEl = document.createElement("edit");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    var deleteButtonEl = document.createElement("delete");
    deleteButtonEl.textContent = "delete";
    deleteButtonEl.className = ("btn delete-btn")
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        // creates option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        //append to select
        statusSelectEl.appendChild(statusOptionEl);

    }

    return actionContainerEl;
}

formEl.addEventListener("submit", taskFormHandler);

var taskButtonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id")
        editTask(taskId);
    }

    else if (targetEl.matches(".delete-btn")) {
        //get elements task id
        var taskId = targetEl.getAttribute("data-task-id")
        deleteTask(taskId);
    }


}

var editTask = function(taskId) {
    console.log("editing task" + taskId)
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName)

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType)


    document.querySelector("input[name='task-name']").value=taskName;
    document.querySelector("select[name='task-type']").value=taskType;
    document.querySelector("#save-task").textContent = "Save Task";

    formEl.setAttribute("data-task-id", taskId);
}

var deleteTask = function(taskId) {
    console.log(taskId);

    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();

}

pageContentEl.addEventListener("click", taskButtonHandler)


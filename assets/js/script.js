var tasksToDoE1 = document.querySelector("#tasks-to-do");
var buttonE1 = document.querySelector("#save-task");

var createTaskHandler = function() {
    var taskItemE1 = document.createElement("li");
    taskItemE1.textContent = "This is a new task";
    taskItemE1.className = "task-item";
    tasksToDoE1.appendChild(taskItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);
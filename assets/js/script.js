var tasksToDoE1 = document.querySelector("#tasks-to-do");
var formE1 = document.querySelector("#task-form");

var createTaskHandler = function() {
    Event.preventDefault();
    var taskItemE1 = document.createElement("li");
    taskItemE1.textContent = "This is a new task";
    taskItemE1.className = "task-item";
    tasksToDoE1.appendChild(taskItemE1);
};

formE1.addEventListener("click", createTaskHandler);
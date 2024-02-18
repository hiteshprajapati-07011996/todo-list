function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
}

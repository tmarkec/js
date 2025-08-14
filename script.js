let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", function() {
  let taskText = document.getElementById("taskInput").value; 

  if (taskText.length === 0) { 
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  renderTasks();
  document.getElementById("taskInput").value = "";
});

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) { 
    let li = document.createElement("li");
    li.className = "list-group-item task-item";
    li.innerText = tasks[i];

    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
      tasks.splice(i, 1); 
      renderTasks();
    };

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm me-md-2 btn-primary";
    editBtn.innerText = "Edit";
    editBtn.onclick = function() {
      tasks.amend(i, 1); 
      renderTasks();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
    li.appendChild(editBtn);
    list.appendChild(li);
  }
}

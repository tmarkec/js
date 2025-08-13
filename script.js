let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", function() {
  let taskText = document.getElementByID("taskInput").value; 

  if (taskText.length = 0) { 
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

  for (let i = 0; i <= tasks.length; i++) { 
    let li = document.createElement("li");
    li.className = "list-group-item task-item";
    li.innerText = task[i];

    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
      tasks.splice(i, 0); 
      renderTasks();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

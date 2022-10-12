let taskList = [];

var taskName = document.getElementById('tname');
var taskPriority = document.getElementById('tprio');
const addTaskButton = document.getElementById('add');
const taskBox = document.getElementById('tasks')

window.addEventListener('load', () => {
  let tasks = localStorage.getItem("tasks");
  if(tasks === null) {
    taskList = [];
  }else{
    taskList = JSON.parse(tasks);
  }
  updateTable();
})
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let tasks = localStorage.getItem("tasks");
  if(tasks === null) {
    taskList = [];
  }else{
    taskList = JSON.parse(tasks);
  }
  const task = {
    "name": taskName.value,
    "priority": taskPriority.value,
    "status": "pending"
  };
  taskList = taskList || [];
  taskList.push(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  updateTable();
})

function updateTable(){
  let tasks = localStorage.getItem("tasks");
  if (tasks === null){
    taskList = [];
  }else{
    taskList = JSON.parse(tasks);
  }
  let html = "";
  taskList.forEach((task, i) => {
    html+= `<div class='task'>
    <input id="task${i}" type="text" class="text" value="${task["name"]} | Priority: ${task["priority"]}" readonly />
    <button onclick='completeTask(${i})' class = 'complete'>Complete</button>
    </div>`
  });
  taskBox.innerHTML = html;
}

function completeTask(ind){
  document.getElementById('task${ind}').classList.add('completed')
}

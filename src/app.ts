const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

interface Task{
    title: string;
    done: boolean;
}

const tasks: Task []= [
  {
    title: "isc na silownie",
    done: false,
  },
  {
    title: "isc na silownie",
    done: false,
  },
  {
    title: "isc na silownie",
    done: false,
  },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task,index) => {
    const taskElement: HTMLElement = document.createElement("li");
    const id: string= 'task-${index}';
    
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.title;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change",() =>{
        task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};
const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({title: taskNameInputElement.value, done: false});
  render();
});

render();

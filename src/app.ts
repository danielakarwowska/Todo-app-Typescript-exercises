const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLLIElement =
  document.querySelector(".categories");

let selectedCategory: Category;

type Category = "work" | "general" | "home";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

const categories: Category[] = ["general", "work", "home"];

const tasks: Task[] = [
  {
    name: "isc na silownie",
    done: false,
    category: "work",
  },
  {
    name: "isc na silownie",
    done: false,
    category: "general",
  },
  {
    name: "isc na silownie",
    done: false,
    category: "home",
  },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = "task-${index}";

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category- ${category}`;

    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category- ${category}`);
    labelElement.innerText = category;
    categoryElement.appendChild(labelElement);

    categoryElement.appendChild(radioInputElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({ name: "isc do pracy", category: "work", done: false });
renderCategories();
render();

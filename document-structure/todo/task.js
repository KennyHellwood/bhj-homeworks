const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAddBtn = document.getElementById("tasks__add");

function addToDo(text) {
    tasksList.insertAdjacentHTML("beforeEnd", `
        <div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);
}

function removeToDo() {
    console.log(e);
}

taskInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        if (taskInput.value) {
            addToDo(taskInput.value);
            e.preventDefault();
        }
    }
});

tasksAddBtn.addEventListener("click", (e) => {
    if (taskInput.value) {
        addToDo(taskInput.value);
        e.preventDefault();
    }
});

tasksList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task__remove")) {
        const parent = e.target.closest(".task");
        parent.remove();
    }
});

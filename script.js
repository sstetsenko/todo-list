const todos = document.querySelector('.todos')
const add = document.querySelector('.add')
const removeAll = document.querySelector('.remove_all')
const removeTask = document.querySelector('.remove_task')
const deleteTask = document.querySelector('.delete')
const input = document.querySelector('#add-new')

let tasks = [];


// const renderTasks = () => {
//     tasks.forEach((task) => {
//         createElement(task)
//         console.log(task);
//     })
// }

const handleChangeNewTask = (event) => {
    input.value = event.target.value;
}

const addTask = () => {
    const task = {
        isCheck: false,
        text: input.value,
        id: Date.now()
    }
    tasks.push(task);

    console.log(tasks);
    createElement(tasks)
}

const getIdTasks = (id) => {
    console.log('delete me', id)
    return id

};

const createElement = (e) => {
    todos.insertAdjacentHTML('afterbegin',
        // `<div class="task" id="${e.id}" isChecked="${e.isChecked}">
        //     <input id="checker" onclick="changeIsChecked(${e.isChecked})" type="checkbox">
        //     <p>${e.text}</p>
        //     <div class="delete" onclick="removeTask(${e.id})"></div>
        // </div>`
        `<p class="task" id="${e.id}"><input id="checker" type="checkbox">${e.text}
        <button class="delete" onclick="getIdTasks(${e.id})">X</button></p>`)
    // добавлять функцию удаления на элемент, а не с помощью слушателя
}

const removeAllTasks = () => {
    let task = document.querySelectorAll('.task')
    task.forEach(e => e.remove())
}

const del = document.querySelector('button.delete')
del.addEventListener('click', e => {
    console.log(e.path);
})

console.log(del);
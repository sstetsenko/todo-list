const buttonAdd = document.querySelector('.add')
const addTask = document.querySelector('.todos')
const removeAll = document.querySelector('.remove_all')

let listTasks = []

// Данные из input
const dataInput = buttonAdd.onclick = () => {
    const dinputValue = document.querySelector('#add-new').value
    dataTask(dinputValue)
}

// Шаблон задач
const dataTask = (text) => {
    const task = {
        isChecked: false,
        id: Date.now(),
        text: text,
    }
    listTasks.push(task)
    createElement(task)
}

// Шаблон HTML
const createElement = (e) => {
    addTask.insertAdjacentHTML('afterbegin',
        `<div class="task" id="${e.id}" isChecked="${e.isChecked}">

            <input id="checker" onclick="changeIsChecked(${e.id})" type="checkbox">

            <p>${e.text}</p>

            <div class="delete" onclick="removeTask(${e.id})"></div>
            
        </div>`)
}

//Удаляет все элементы из списка хадач
const removeAllTasks = () => {
    const tasks = document.querySelectorAll('.task')

    tasks.forEach(e => e.remove())
}

const findTaskById = (id) => {
    const task = listTasks.find((e) => {
        if (e.id == id) {
            return e
        }
    })
    return task
}

const removeTask = (id) => {
    const taskId = document.getElementById(id)
    const task = findTaskById(id)

    if (taskId.id == task.id) {
        taskId.remove()
    }

}

const changeIsChecked = (id) => {
    const taskElement = document.getElementById(id)
    const task = findTaskById(id)

    if (task.isChecked) {
        taskElement.classList.remove('do')
        task.isChecked = false
    } else {
        taskElement.classList.add('do')
        task.isChecked = true
    }
}

const displayTaskDone = () => {
    const tasks = document.querySelectorAll('.task')

    tasks.forEach(e => {
        if (e.classList.value !== 'task do') {
            e.classList.add('none')
        }
    })
}

const displayTaskInProgress = () => {
    const inProgress = document.querySelectorAll('.task')

    inProgress.forEach(e => {
        if (e.classList.value != 'task do') {
            e.classList.remove('none')
        }
        if (e.classList.value == 'task do') {
            e.classList.add('none')
        }
    })

}

const displayTaskAll = () => {
    const all = document.querySelectorAll('.task')

    all.forEach(e => {
        if (e.classList.value == 'task none' || e.classList.value == 'task do none') {
            e.classList.remove('none')
        }
    })
}
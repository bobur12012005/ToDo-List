let form = document.forms.add_task
let container = document.querySelector('.container')
let todos = []

form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        task: new FormData(form).get('task'),
        status: false,
        time: new Date().toLocaleTimeString('uz-UZ', { hour12: true })
    }

    if (task.task.trim() !== "") {
        todos.push(task)
        reload(todos, container)
    }
}

function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let todo_box = document.createElement('div')
        let todo_del = document.createElement('div')
        let todo_del_img = document.createElement('img')
        let todo_title = document.createElement('h2')
        let todo_time = document.createElement('span')

        todo_box.classList.add('todo_box')
        todo_del.classList.add('todo_del')
        todo_del_img.classList.add('todo_del_img')
        todo_title.classList.add('todo_title')
        todo_time.classList.add('todo_time')

        todo_time.innerHTML = item.time
        todo_title.innerHTML = item.task
        todo_del_img.src = 'del.png'

        place.append(todo_box)
        todo_box.append(todo_del, todo_title, todo_time)
        todo_del.append(todo_del_img)

        todo_box.ondblclick = () => {
            let prm = prompt('Change the title...')
            if (prm !== '') {
                item.task = prm
                todo_title.innerHTML = item.task
            }
        }

        todo_del.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)
            todo_box.remove()
        }

        todo_title.onclick = () => {
            todo_title.classList.toggle('done')
            if (todo_title.classList.contains('done')) {
                item.status = true
            } else {
                item.status = false
            }
        }
    }
}
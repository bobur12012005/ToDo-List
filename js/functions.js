export function reloadToDo(place, writingZone, submitBtn) {
    submitBtn.onclick = () => {
        let todoText = writingZone.value.trim()

        if (todoText.length > 0) {
            let todo_box = document.createElement('div')
            let todo_del = document.createElement('div')
            let todo_del_img = document.createElement('img')
            let todo_title = document.createElement('h2')
            let todo_time = document.createElement('span')

            todo_box.classList.add('todo_box')
            todo_del.classList.add('todo_del')
            todo_del_img.classList.add('todo_del_img')
            todo_del_img.src = './img/del.png'
            todo_title.classList.add('todo_title')
            todo_title.innerHTML = todoText
            todo_time.classList.add('todo_time')
            time(todo_time)

            place.append(todo_box)
            todo_box.append(todo_del, todo_title, todo_time)
            todo_del.append(todo_del_img)

            todo_del.onclick = () => {
                todo_box.remove()
            }

            writingZone.value = ''
        }
    }
}

function time(place) {
    let currentTime = new Date();
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    place.innerHTML = `${hours}:${minutes}`
}
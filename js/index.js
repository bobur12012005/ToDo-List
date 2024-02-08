import { reloadToDo } from "./functions.js";

let container = document.querySelector('.container')
let todo_place = document.querySelector('#form input')
let todo_submit = document.querySelector('#form button')

reloadToDo(container, todo_place, todo_submit)
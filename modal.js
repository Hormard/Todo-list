import { todoList, toggle, refreshStorages } from './utils.js'
import { render } from './card.js';

export const initModal = () => {
    document.querySelector('.modal').addEventListener('click', e => {
        if(e.target.classList.contains('modal-close')){
            toggle(document.querySelector('.modal'))
        } else if(e.target.classList.contains('modal-save')){
            toggle(document.querySelector('.modal'))
            let title = document.querySelector('.todo-title').value
            let description = document.querySelector('.todo-description').value
            todoList.push({title, description})
            refreshStorages()
            render()
        }
    })
}


import { refreshStorages, todoList, toggle } from './utils.js'
import { render } from './card.js';


export const initController = () => {
    document.querySelector('#app-controller').addEventListener('click', e =>{
        if(e.target.classList.contains('btn-info')){
            toggle(document.querySelector('.modal'))
        }else if(e.target.classList.contains('btn-warning')){
            todoList.pop()
            refreshStorages()
            render()
        }else if(e.target.classList.contains('btn-danger')){
            todoList.length = 0
            refreshStorages()
            render()
        }
    })
}
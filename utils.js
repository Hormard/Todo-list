export const toggle = (el) => el.classList.toggle('active')
export let todoList = []
        if(todoList != undefined){
            todoList = JSON.parse(localStorage.getItem('todos'))
        }

export const refreshStorages = () => {
    return localStorage.setItem('todos', JSON.stringify(todoList))
}        
export const getStorages = () => {
    if(localStorage.getItem('todos') === null){
        todoList = []
        localStorage.setItem('todos', JSON.stringify(todoList))
    }
    return JSON.parse(localStorage.getItem('todos'))
}
 
  
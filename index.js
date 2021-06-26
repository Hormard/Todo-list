import { data } from './data.js';
import { Card } from './card.js';
import { createModal } from './modal.js';

const main = document.querySelector('main')
const todoList = document.querySelector('ul')
const btnAddModal = document.querySelector('.btn-primary')
const btnDeleteLastTodo = document.querySelector('.btn-warning')
const btnDeleteLastAll = document.querySelector('.btn-danger')

todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')

btnAddModal.addEventListener('click', () => {
   const modal = document.createElement('div');
   modal.classList.add('fixed-top')
   main.append(modal);
   modal.innerHTML = createModal()
   const btnClose = document.querySelector('.btn-cancel')
   const btnAddTodo = document.querySelector('.add-todo')
   const modalTitle = document.querySelector('.todo-title')
   const modalDescription = document.querySelector('.todo-description')
   
   btnClose.addEventListener('click', () => {
      modal.remove()
   })

   btnAddTodo.addEventListener('click', () => {
      data.push(new Card(modalTitle.value, modalDescription.value))
      todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')
      modal.remove()
   })
})

btnDeleteLastTodo.addEventListener('click', () => {
   data.pop()
   todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')
})

btnDeleteLastAll.addEventListener('click', () => {
   data.length = 0
   todoList.innerHTML = data.map(todo => new Card(todo.title, todo.description).getHtml()).join(' ')
})



'use strict'
let DB = []

render()


$('#add-todo').addEventListener('click', function() {
    initLocalStorage()
    createCard($('#input').value)
    setLocalStorage($('#input').value)
    getCardsLimit(DB, 6)
    clearInput($('#input'))
    initCardListeners($('#todo-list'))
    render()
    
})

function initCardListeners(list){
    list.childNodes.forEach(function(el, index) {
        el.addEventListener('click', function(e) {
            if(e.target.className === 'btn-close'){
                DB.splice(index, 1)
                updateLocalStorage()
                render()
            }else if(e.target.classList.contains('check-input')){
                toggle($('.card-body', index), "text-decoration-line-through")
            }
        })
    })
}

function $(selector, number = 0){
    return document.querySelectorAll(selector)[number]
}

function createElement(tag, classNames, text = '', type = ''){
    let element = document.createElement(tag)
    element.className = classNames
    element.innerText = text
    element.type = type
    return element
}

function createCard(text){
    if(text === ''){
        text = 'Empty todo'
    }
    let card = createElement('div', 'card flex-row px-2')
    let checkBox = createElement('input', 'check-input d-flex align-self-center', '', 'checkbox')
    let cardText = createElement('div', 'card-body d-flex justify-content-between', text)
    let btnClose = createElement('button', 'btn-close')
    card.append(checkBox)
    cardText.append(btnClose)
    card.append(cardText)
    $('#todo-list').append(card)
}

function clearInput(input){
    input.value = ''
}

function setLocalStorage(card){
        DB.push(card)
        updateLocalStorage()
}

function initLocalStorage(){
    DB = JSON.parse(localStorage.getItem('todos')) || []
    return DB
}

function render(){
    if($('.card') !== undefined){
      while($('#todo-list').firstChild)
      $('#todo-list').removeChild($('#todo-list').firstChild)
    }    
    initLocalStorage().forEach((input) => createCard(input))
    initCardListeners($('#todo-list'))
    printTodoCount($('.badge'), initLocalStorage().length)
}

function updateLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(DB))
}

function printTodoCount(el, count){
    el.innerText = count
}

function toggle(el, action){
    el.classList.toggle(action)
}

function getCardsLimit(data, limit){
    if(data.length > limit){
        data.pop()
        updateLocalStorage()
        render()
        $('.toast-body').innerText = `Сначало сделай остальные ${limit} дел`
        getToast()
        CloseToast()
        setTimeout(HideToast, 10000)
    }
}

function getToast(){
    $('.toast-hud').classList.remove('d-none')
    $('.toast-hud').classList.add('d-block')
}

function CloseToast(){
    $('.toast-btn').addEventListener('click', () => HideToast())
}

function HideToast(){
    $('.toast-hud').classList.remove('d-block')
    $('.toast-hud').classList.add('d-none')
}

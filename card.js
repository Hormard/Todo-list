import { getStorages } from './utils.js'

export function Card(title, description){
    this.title = title;
    this.description = description;

    this.getHtml = function(){
        return `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">${this.info.time}</div>
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                </div>`
    }

    this.info = {
        get time(){
            return `${new Date().toLocaleString()}`
        }
    }
}

export const render = () => {
    document.querySelector('ul').innerHTML = getStorages().map(todo => new Card(todo.title, todo.description).getHtml()).join('')
    document.querySelector('.badge').innerText = getStorages().length
}
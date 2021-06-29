import { getStorages } from './utils.js'
import { initModal } from './modal.js'
import { initController } from './controller.js'
import { render } from './card.js';

const app = () => {
    getStorages()
    initModal()
    initController()
    render()
}

document.addEventListener('DOMContentLoaded', app)


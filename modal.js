export function createModal(){
    return `<div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Todo</h5>
                </div>
                <div class="modal-body">
                <form>
                    <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name todo:</label>
                    <input type="text" class="form-control todo-title" id="recipient-name">
                    </div>
                    <div class="mb-3">
                    <label for="message-text" class="col-form-label">Description:</label>
                    <textarea class="form-control todo-description" id="message-text"></textarea>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-cancel" data-bs-dismiss="modal">Сancel</button>
                <button type="button" class="btn btn-primary add-todo">Add todo</button>
                </div>
            </div>
            </div>`
}
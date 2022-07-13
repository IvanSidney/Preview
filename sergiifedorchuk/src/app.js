import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import Api from './api';

console.log("im here");

function init() {

    var myModal = Modal(document.getElementById('exampleModal'),);

    renderTodos();

    document.getElementById('onSaveTodo').addEventListener('click', () => {
        const input = document.getElementById('toDoName');
        Api.addTodo({
            name: input.value,
        });
        myModal.hide();
        input.value = '';
        renderTodos();
    });

    function renderTodos() {

        document.getElementById('container').innerHTML = '';
        const data = Api.getData();
    
    data.forEach((item) => {
        const li = document.createElement('li');
        li.id = item.id;
        li.innerHTML = `<div class="input-group mb - 3">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="checkbox" value="" />
                            </div>
                                <input type="text" class="form-control" value="${item.name}" />
                                <div class="input-group-text">"test"</div>
                        </div>`;
        document.getElementById('container').appendChild(li);

    });
    }

}
init();


import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import Api from './api';

function init() {

    const data = Api.getData() || [];
    data.forEach((item) => {
        console.log(item.name);
    const li = document.createElement('li');
        li.innerHTML = `<div class="input-group mb - 3">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="checkbox" value="" />
                            </div>
                                <input type="text" class="form-control" value="${item.name}" />
                        </div>`;
        document.getElementById('container').appendChild(li);
    });

    document.getElementById('onSaveTodo').addEventListener('click', () => {
        const input = document.getElementById('toDoName');
        console.log(input.value);
    });

}
init();
console.log("im here");

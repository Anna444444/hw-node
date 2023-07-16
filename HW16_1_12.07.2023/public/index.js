import * as actions from './actions.js';
import { dispatcher } from './dispatcher.js';
import { countView, listView } from './view.js';
import { store } from './store.js';

console.log(actions.types);

const incrementButton = document.getElementById("incr");
const decrementButton = document.getElementById("decr");
const clearButton = document.getElementById("clear");
const addButton = document.getElementById("add-button");
const addForm = document.getElementById("add-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

incrementButton.addEventListener("click", () => {
    dispatcher.dispatch(actions.increment());
});

decrementButton.addEventListener("click", () => {
    dispatcher.dispatch(actions.decrement());
});

clearButton.addEventListener("click", () => {
    dispatcher.dispatch(actions.clear());
});

addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = itemInput.value.trim();
    if (text !== "") {
        dispatcher.dispatch(actions.addItem(text));
        itemInput.value = "";
    }
});

itemList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("remove-button")) {
        const id = parseInt(target.parentNode.getAttribute("data-id"));
        dispatcher.dispatch(actions.removeItem(id));
    } else if (target.classList.contains("up-button")) {
        const id = parseInt(target.parentNode.getAttribute("data-id"));
        dispatcher.dispatch(actions.moveItemUp(id));
    } else if (target.classList.contains("down-button")) {
        const id = parseInt(target.parentNode.getAttribute("data-id"));
        dispatcher.dispatch(actions.moveItemDown(id));
    }
});

let counter = new countView(store);
let list = new listView(store);

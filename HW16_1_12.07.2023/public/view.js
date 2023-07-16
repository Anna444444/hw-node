export class listView {
    constructor(store) {
        this.store = store;
        this.store.subscribe(this.render);
        this.render();
    }

    render = () => {
        const items = this.store.getState().items;
        const itemList = document.getElementById("item-list");
        itemList.innerHTML = "";
        items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.text;
            li.setAttribute("data-id", item.id);

            const removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.className = "remove-button";

            const upButton = document.createElement("button");
            upButton.textContent = "Вверх";
            upButton.className = "up-button";

            const downButton = document.createElement("button");
            downButton.textContent = "Вниз";
            downButton.className = "down-button";

            li.appendChild(removeButton);
            li.appendChild(upButton);
            li.appendChild(downButton);
            itemList.appendChild(li);
        });
    };
}

export class countView {
    constructor(store) {
        this.store = store;
        this.store.subscribe(this.render);
        this.render();
    }

    render = () => {
        const countElement = document.querySelector(".number");
        countElement.textContent = this.store.getState().count.toString();
    }
}


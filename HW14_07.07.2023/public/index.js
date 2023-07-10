const userName = prompt("Введите свое имя?");

let socket = io();
console.log(socket);

socket.on("message", (data) => {
    let msg = document.createElement('div');
    msg.classList.add('incom');
    msg.innerText = `${data.from}:${data.text}`;
    let chat = document.getElementById('chat');
    chat.append(msg);
});

myform = document.querySelector('#input-form').onsubmit = (ev) => {
    ev.preventDefault();
    let msg = document.querySelector('#input').value;
    let selectedId = document.querySelector('#selected-id').value;

    if (msg && selectedId) {
        socket.emit('privateMessage', { id: selectedId, message: msg });
    }
};

socket.on('privateMessage', (message) => {
    let msg = document.createElement('div');
    msg.classList.add('incom');
    msg.innerText = `${message.from}: ${message.text}`;
    let chat = document.getElementById('chat');
    chat.append(msg);
});

socket.on('connections', (connections) => {
    const select = document.getElementById('selected-id');

    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

    connections.forEach((connectionId) => {
        const option = document.createElement('option');
        option.value = connectionId;
        option.text = connectionId;
        select.appendChild(option);
    });
});

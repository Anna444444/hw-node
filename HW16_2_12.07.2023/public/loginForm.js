const form = document.querySelector('.login-form');
const usernameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password') {
        console.log('Авторизация успешна!');
        form.reset();
    } else {
        console.log('Неверное имя пользователя или пароль');
    }
}

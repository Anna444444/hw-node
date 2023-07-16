const menuItems = document.querySelectorAll('.main-menu ul li a');

function handleClick(event) {
    menuItems.forEach((menuItem) => {
        menuItem.classList.remove('active');
    });

    event.target.classList.add('active');
}

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', handleClick);
});

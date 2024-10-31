const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Toggle the 'active' class
    toggleButton.classList.toggle('active'); // Toggle the 'active' class on the button

    // Change the button icon
    if (navbarMenu.classList.contains('active')) {
        toggleButton.innerHTML = '&#10005;'; // Change to X icon
    } else {
        toggleButton.innerHTML = '&#9776;'; // Change back to hamburger icon
    }
});

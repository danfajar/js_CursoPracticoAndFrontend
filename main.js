const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const dropMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
dropMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    console.log(desktopMenu)
};
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    console.log(mobileMenu)
};
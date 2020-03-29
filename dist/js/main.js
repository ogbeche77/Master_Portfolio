// Select DOM Items
const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

//State of the nemu/nav bar
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
'use strict'

const burgerButton = document.querySelector('.header-burger');
const mobileMenuElement = document.querySelector('.mobile-menu-wrapper');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

function openMobileMenu() {
    mobileMenuElement.classList.remove('visually-hidden');
}

function closeMobileMenu() {
    mobileMenuElement.classList.add('visually-hidden');
}

burgerButton.addEventListener('click', openMobileMenu);

mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
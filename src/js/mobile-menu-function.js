/* Відкриття і закриття модального мобільного вікна */
const burgerButton = document.querySelector('.header-burger');
const mobileMenuElement = document.querySelector('.mobile-menu-wrapper');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

/* Функціонал модального мобільного вікна */
const homeButton = document.querySelector('.mobile-menu-btn-content-home');
const favoritesButton = document.querySelector('.mobile-menu-btn-content-favorites');

/* Відкриття і закриття модального мобільного вікна */
function openMobileMenu() {
  mobileMenuElement.classList.remove('visually-hidden');
}

function closeMobileMenu() {
  mobileMenuElement.classList.add('visually-hidden');
}

burgerButton.addEventListener('click', openMobileMenu);

mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

/* Функціонал модального мобільного вікна */
homeButton.addEventListener('click', () => {
  window.location.href = "./";
});

favoritesButton.addEventListener('click', () => {
  window.location.href = "favorites.html";
});


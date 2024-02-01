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

// /*  Отримання всіх посилань у мобільному меню */
//   const mobileMenuLinks = document.querySelectorAll('#mobile-menu-nav a');
// /* Функція для виділення активного елемента */
//     function highlightCurrentPage() {
//   const currentPage = window.location.pathname;
// /* Ітерація по всіх посиланнях */
//     mobileMenuLinks.forEach(function(link) {
// /* Видалення класу active з усіх посилань */
//       link.classList.remove('active');
// /* Додавання класу active до посилання, яке вказує на поточну сторінку */
//       if (link.getAttribute('href') === currentPage) {
//         link.classList.add('active');
//       }
//     });
// }
// /* Виклик функції для встановлення активного класу на старті */
// highlightCurrentPage();
// /* Додавання обробника подій для слідкування за зміною хеша */
//   window.addEventListener('popstate', highlightCurrentPage);

window.addEventListener('load', () => {
  if (window.location.pathname.endsWith('favorites.html')) {
    favoritesButton.classList.add('active');
    homeButton.classList.remove('active');
  } else {
    homeButton.classList.add('active');
    favoritesButton.classList.remove('active');
  }
});
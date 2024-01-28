// Імпортуємо функцію displayQuote з іншого модуля
import { displayQuote } from './js/quote.js';

// Об'єкт конфігурації для цитат на сторінці "Улюблене"
const pageFavorConfig = {
  quoteTextSelector: '.quoote-text', // Селектор для тексту цитати
  quoteAuthorSelector: '.quote-autor', // Селектор для автора цитати
};

// Перевіряємо, чи є на сторінці елементи для тексту та автора цитати
if (
  document.querySelector(pageFavorConfig.quoteTextSelector) &&
  document.querySelector(pageFavorConfig.quoteAuthorSelector)
) {
  // Якщо елементи є, відображаємо цитату
  displayQuote(pageFavorConfig);
}

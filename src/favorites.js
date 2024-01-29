import { displayQuote } from './js/quote.js';
import './js/favorites-list.js';
import './js/delete-from-favorites.js'
import axios from 'axios';

const pageFavorConfig = {
  quoteTextSelector: '.quoote-text', // Селектор для тексту цитати
  quoteAuthorSelector: '.quote-autor', // Селектор для автора цитати
};

if (
  document.querySelector(pageFavorConfig.quoteTextSelector) &&
  document.querySelector(pageFavorConfig.quoteAuthorSelector)
) {
  displayQuote(pageFavorConfig);
}

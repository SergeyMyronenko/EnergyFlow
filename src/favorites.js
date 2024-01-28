import { getQuote } from './js/quote.js';

async function displayFavoriteQuote() {
  try {
    const quoteData = await getQuote();
    const quoteTextElement = document.querySelector('.quoote-text');
    const quoteAuthorElement = document.querySelector('.quote-autor');

    if (!quoteTextElement || !quoteAuthorElement) {
      throw new Error('Елементи для відображення цитати не знайдено');
    }

    quoteTextElement.innerText = quoteData.quote;
    quoteAuthorElement.innerText = quoteData.author;
  } catch (error) {
    console.error('Сталася помилка при відображенні цитати:', error);
  }
}

displayFavoriteQuote();

'use strict';
import axios from 'axios';

export async function getQuote() {
  // Проверяем, доступно ли localStorage и есть ли в нем данные, а также проверяем, совпадает ли timestamp
  const quoteData =
    localStorage && JSON.parse(localStorage.getItem('quoteData'));

  const currentDay = new Date().getDate();

  if (quoteData && quoteData.timestamp === currentDay) {
    // Если условия выполняются, возвращаем quoteData
    // console.log('Дані про цитату збережені в localStorage');
    return quoteData;
  }
  // Если условия не выполняются, запрашиваем новую цитату
  // console.log('Дані про цитату не збережені в localStorage');
  return fetchNewQuote();
}

async function fetchNewQuote() {
  try {
    // Відправляємо GET-запит на сервер для отримання нової цитати
    const response = await axios.get(
      'https://energyflow.b.goit.study/api/quote'
    );
    // Створюємо об'єкт з новими даними про цитату
    const newQuoteData = {
      quote: response.data.quote, // текст цитати
      author: response.data.author, // автор цитати
      timestamp: new Date().getDate(), // поточна дата
    };
    // Зберігаємо дані про цитату в локальне сховище
    localStorage.setItem('quoteData', JSON.stringify(newQuoteData));
    // Повертаємо нові дані про цитату
    return newQuoteData;
  } catch (error) {
    // Виводимо помилку в консоль, якщо щось пішло не так
    console.error('Помилка:', error);
  }
}

async function displayQuote() {
  try {
    const quoteData = await getQuote();
    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');

    if (!quoteTextElement || !quoteAuthorElement) {
      throw new Error('Елементи для відображення цитати не знайдено');
    }

    quoteTextElement.innerText = quoteData.quote;
    quoteAuthorElement.innerText = quoteData.author;
  } catch (error) {
    console.error('Сталася помилка при відображенні цитати:', error);
  }
}

// displayQuote();

// Перевіряємо, чи існують елементи з класами 'quote-text' та 'quote-author' на сторінці.
// Якщо так, то викликаємо функцію displayQuote() для відображення цитати.
if (
  document.querySelector('.quote-text') &&
  document.querySelector('.quote-author')
) {
  displayQuote();
}

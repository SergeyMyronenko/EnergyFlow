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

// Асинхронна функція для відображення цитати
async function displayQuote(config) {
  try {
    // Отримуємо дані цитати
    const quoteData = await getQuote();
    // Знаходимо елемент для відображення тексту цитати
    const quoteTextElement = document.querySelector(config.quoteTextSelector);
    // Знаходимо елемент для відображення автора цитати
    const quoteAuthorElement = document.querySelector(
      config.quoteAuthorSelector
    );

    // Якщо не знайдено елементів для відображення тексту або автора цитати, викидаємо помилку
    if (!quoteTextElement || !quoteAuthorElement) {
      throw new Error('Елементи для відображення цитати не знайдено');
    }

    // Встановлюємо текст цитати
    quoteTextElement.innerText = quoteData.quote;
    // Встановлюємо автора цитати
    quoteAuthorElement.innerText = quoteData.author;
  } catch (error) {
    // Виводимо помилку в консоль, якщо відбулася помилка при відображенні цитати
    console.error('Сталася помилка при відображенні цитати:', error);
  }
}

// Об'єкт конфігурації для цитат на сторінці
const pageQuoteConfig = {
  quoteTextSelector: '.quote-text', // Селектор для тексту цитати
  quoteAuthorSelector: '.quote-author', // Селектор для автора цитати
};

// Перевіряємо, чи є на сторінці елементи для тексту та автора цитати
if (
  document.querySelector(pageQuoteConfig.quoteTextSelector) &&
  document.querySelector(pageQuoteConfig.quoteAuthorSelector)
) {
  // Якщо елементи є, відображаємо цитату
  displayQuote(pageQuoteConfig);
}

// Експортуємо функцію displayQuote
export { displayQuote };

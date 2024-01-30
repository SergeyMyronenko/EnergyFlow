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
export async function displayQuote(config) {
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
// Об'єкти конфігурації для цитат на сторінці
const quoteConfigs = [
  {
    quoteTextSelector: '.quote-text', // Селектор для тексту цитати на сторінці home
    quoteAuthorSelector: '.quote-author', // Селектор для автора цитати на сторінці home
  },
  {
    quoteTextSelector: '.quoote-text', // Селектор для тексту цитати  на сторінці favorites
    quoteAuthorSelector: '.quote-autor', // Селектор для автора цитати на сторінці favorites
  },
];

// Перевіряємо, чи є на сторінці елементи для тексту та автора цитати
quoteConfigs.forEach(config => {
  if (
    document.querySelector(config.quoteTextSelector) &&
    document.querySelector(config.quoteAuthorSelector)
  ) {
    // Якщо елементи є, відображаємо цитату
    displayQuote(config);
  }
});

// Експортуємо функцію displayQuote
// export { displayQuote };

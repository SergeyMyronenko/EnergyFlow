import axios from 'axios';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const FILTER_IMG_CONTAINER = document.querySelector(
  '.exersizes-cards-container'
);

const EXERCISES_CARD_CONTAINER = document.querySelector(
  '.exersizes-result-card-container'
);

const MESSAGE_CONTAINER = document.querySelector(
  '.exersizes-message-container'
);

const PAGINATION_CONTAINER = document.querySelector(
  '.exersizes-pagination-container'
);

const dash = document.querySelector('.dash');
const exerciseName = document.querySelector('.exercise-name');

const page = 1;
let filterType;

const filterListener = document.querySelector('.exersizes-list');
const paginationListener = document.querySelector('.exersizes-pagination-list');
const paginationBtn = document.querySelector('.exersizes-pagination-btn');

// ============ Запуск фільтрації при завантаженні сторінки ============

document.addEventListener('DOMContentLoaded', filterFetch());

// ============ Запуск фільтрації при кліку на кнопку ============

filterListener.addEventListener('click', e => {
  e.preventDefault();
  addLoading();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else {
    const filterType = e.target.textContent.trim();
    sessionStorage.clear();
    sessionStorage.setItem('filterType', JSON.stringify(filterType));
    filterFetch(filterType);
    exerciseNameHiding();
    inputHidingAndRemoveListeners();
    changeFilterBtnStyle(e);
    removeLoading();
  }
});

// ============ Запуск фільтрації при кліку на загальну картку ============

FILTER_IMG_CONTAINER.addEventListener('click', e => {
  e.preventDefault();
  addLoading();
  if (
    e.target.nodeName !== 'DIV' &&
    e.target.nodeName !== 'H3' &&
    e.target.nodeName !== 'P'
  ) {
    return;
  }

  const filterType = e.target.dataset.filter;
  const filterSubType = e.target.dataset.target;

  fetchExersizes(filterType, filterSubType, page);
  showExerciseName(e);
  inputVisualisationAddListeners();
  removeLoading();
  sessionStorage.setItem('filterSubType', JSON.stringify(filterSubType));
  sessionStorage.setItem('filterType', JSON.stringify(filterType));
});

// ============ Запуск фільтрації при кліку на пагінацію ============

PAGINATION_CONTAINER.addEventListener('click', e => {
  e.preventDefault();
  addLoading();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else {
    const filterType = sessionStorage.getItem('filterType').slice(1, -1);
    const page = e.target.textContent.trim();
    let filterSubType;

    if (sessionStorage.getItem(`filterSubType`)) {
      filterSubType = sessionStorage.getItem('filterSubType').slice(1, -1);
    } else {
      filterSubType = sessionStorage.getItem('filterSubType');
    }

    paginationFetch(filterType, filterSubType, page);
    changingPaginationBtnStyle(e);
    removeLoading();
  }
});

//  ===================== Запит по фільтру типів =====================

async function filterFetch(filterType, filterSubType, page) {
  const response = await axios.get('/filters', {
    params: keyGen(filterType, filterSubType, page),
  });

  try {
    if (response.data.results.length === 0) {
      throw new Error('No results found...');
    }
    filterType = response.data.results[0].filter;
    renderFilterImg(response);
    pagination(response);
  } catch (error) {
    renderMessage();
  }
}

// =================== Запит вправ  ========================

async function fetchExersizes(filterType, filterSubType, page) {
  const response = await axios.get('/exercises', {
    params: keyGen(filterType, filterSubType, page),
  });

  try {
    if (response.data.results.length === 0) {
      throw new Error('No results found...');
    }
    renderExersizesCard(response);
    if (page === 1) {
      pagination(response);
    }
  } catch (error) {
    renderMessage();
  }
}

// =========================== Запит вправ по пагінації ===========================

async function paginationFetch(filterType, filterSubType, page) {
  let response = null;

  if (filterSubType) {
    response = await fetchExersizes(filterType, filterSubType, page);
  } else {
    response = await filterFetch(filterType, filterSubType, page);
  }
}

// ========================== Пошук вправи за назвою input ==========================

async function searchByName(e) {
  if (e.target.nodeName !== 'BUTTON' && e.keyCode !== 13) {
    return;
  }
  addLoading();
  const searchQuery = document
    .querySelector('.exersizes-input')
    .value.trim()
    .toLowerCase();

  const filterType = sessionStorage.getItem('filterType').slice(1, -1);
  const filterSubType = sessionStorage.getItem('filterSubType').slice(1, -1);

  try {
    if (searchQuery.length === 0) {
      throw new Error('Nthing to search...');
    } else {
      const response = await axios.get('/exercises', {
        params: keyGen(filterType, filterSubType, page, searchQuery),
      });
      if (response.data.results.length === 0) {
        throw new Error('No results found...');
      }
      simpleInputCleaning();
      renderExersizesCard(response);
      pagination(response);
      removeLoading();
    }
  } catch (error) {
    console.log(error);
    renderMessage();
  }
}

//  ===================== Вставлення карток по фільтру =====================

async function renderFilterImg(resp) {
  const results = resp.data.results;
  FILTER_IMG_CONTAINER.classList.remove('visually-hidden');
  EXERCISES_CARD_CONTAINER.classList.add('visually-hidden');
  MESSAGE_CONTAINER.classList.add('visually-hidden');
  FILTER_IMG_CONTAINER.innerHTML = '';
  const markup = results
    .map(el => {
      const filter = el.filter;
      const target = el.name;
      return `<li class="first-filter"><div class="exersizes-card-bytype" tabindex="0" style="background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.7) 0%,
    rgba(16, 16, 16, 0.7) 100%
  ), url(${
    el.imgUrl
  }) center center no-repeat; background-size: cover;" data-filter="${filter}" data-target="${target}">
        <h3 class="exersizes-card-bytype-header" data-filter="${filter}" data-target="${target}">
          ${el.name[0].toUpperCase() + el.name.slice(1)}
        </h3>
        <p class="exersizes-card-bytype-text" data-filter="${filter}" data-target="${target}">${
        el.filter
      }</p>
      </div></li>`;
    })
    .join('');
  FILTER_IMG_CONTAINER.insertAdjacentHTML('beforeend', markup);
}

// ======================== Вставлення карток вправ ========================

function renderExersizesCard(resp) {
  const results = resp.data.results;
  EXERCISES_CARD_CONTAINER.classList.remove('visually-hidden');
  FILTER_IMG_CONTAINER.classList.add('visually-hidden');
  MESSAGE_CONTAINER.classList.add('visually-hidden');
  EXERCISES_CARD_CONTAINER.innerHTML = '';
  let id;
  const markup = results
    .map(el => {
      let exerciseName = el.name;
      id = el._id;
      const viewPortWidth = window.innerWidth;

      if (viewPortWidth >= 1440) {
        if (exerciseName.length > 25) {
          exerciseName =
            el.name[0].toUpperCase() + el.name.slice(1, 25).trim() + '...';
        }
      } else if (viewPortWidth < 1440 && viewPortWidth >= 768) {
        if (exerciseName.length > 17) {
          exerciseName =
            el.name[0].toUpperCase() + el.name.slice(1, 16).trim() + '...';
        }
      } else {
        exerciseName =
          el.name[0].toUpperCase() + el.name.slice(1, 20).trim() + '...';
        console.log('320');
      }

      return `        <li class="second-filter"><div class="exersizes-card" tabindex="0">
    <div class="exersizes-card-header-cont">
        <div class="exersizes-card-workout-cont">
            <div class="exersizes-card-workout-header-title">workout</div>
            <div class="exersizes-card-workout-rate-container">
                <span class="exersizes-card-workout-rate">${Math.round(
                  el.rating
                )
                  .toString()
                  .padEnd(3, '.0')}</span>
                <svg class="exersizes-card-rate-icon" width="18" height="18" aria-label="rate-icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            
            </div>
           
        </div>
       <button class="exersizes-card-btn" type="button" data-id=${id}>start 
        <svg class="exersizes-card-btn-icon" width="14" height="14" aria-label="arrow-icon">
            <use href="./img/sprite.svg#arrow"></use>
        </svg>
       </button>
    </div>

    <div class="exersizes-card-workout-title-cont">
<svg class="exersizes-card-title-icon" width="24" height="24" aria-label="man-icon">
                    <use href="./img/sprite.svg#dude"></use>
                </svg>
                <h3 class="exersizes-card-title-h">${exerciseName}</h3>
    </div>
    <ul class="exersizes-card-info-list">
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Burned calories:
            <span class="exersizes-card-info-data" data-burning-calories>${
              el.burnedCalories
            } / ${el.time} min</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Body part:
            <span class="exersizes-card-info-data" data-body-type>${
              el.bodyPart[0].toUpperCase() + el.bodyPart.slice(1)
            }</span></p></li>
        <li class="exersizes-card-info-item"><p class="exersizes-card-info-descr">Target:
            <span class="exersizes-card-info-data" data-filter-sub-type>${
              el.target[0].toUpperCase() + el.target.slice(1)
            }</span></p></li>
    </ul>
</div></li>`;
    })
    .join('');
  EXERCISES_CARD_CONTAINER.insertAdjacentHTML('beforeend', markup);
}

// =========================== Виведення повідомлення ===========================

async function renderMessage(error) {
  FILTER_IMG_CONTAINER.classList.add('visually-hidden');
  EXERCISES_CARD_CONTAINER.classList.add('visually-hidden');
  MESSAGE_CONTAINER.classList.remove('visually-hidden');
  const paginationList = document.querySelector('.exersizes-pagination-list');
  paginationList.innerHTML = '';

  MESSAGE_CONTAINER.innerHTML = '';
  const markupMessage = `<p class="noresult-message" >Unfortunately, <em class="span-strong">no results</em> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;

  MESSAGE_CONTAINER.insertAdjacentHTML('beforeend', markupMessage);
}

// =========================== Зміна стилю активної фільтр-кнопки ===========================

function changeFilterBtnStyle(event) {
  const filterBtns = document.querySelectorAll('.exersizes-menu-btn');
  filterBtns.forEach(el => {
    el.classList.remove('exersizes-menu-btn-active');
  });
  const activeBtn = event.target;
  activeBtn.classList.add('exersizes-menu-btn-active');
}

// ======================== Поява тексту вправи ========================

function showExerciseName(e) {
  dash.classList.remove('visually-hidden');
  exerciseName.classList.remove('visually-hidden');

  exerciseName.textContent = e.target.dataset.target.trim();
}

// =========================== Видалення тексту вправи ===========================

function exerciseNameHiding() {
  exerciseName.textContent = '';
  dash.classList.add('visually-hidden');
  exerciseName.classList.add('visually-hidden');
}

// =========================== Key gen ===========================

function keyGen(filterType, filterSubType, page, searchQuery) {
  const config = {
    page,
    limit: 12,
  };

  if (searchQuery) {
    config.keyword = searchQuery;
  }

  if (filterType && !filterSubType) {
    config.filter = filterType;
    return config;
  } else if (!filterType && !filterSubType) {
    config.filter = 'Muscles';
    return config;
  }

  switch (filterType) {
    case 'Muscles':
      config.muscles = filterSubType;
      break;
    case 'Equipment':
      config.equipment = filterSubType;
      break;
    default:
      config.bodypart = filterSubType;
      break;
  }

  return config;
}

// =========================== Pagination ===========================

async function pagination(resp, error) {
  let paginationElements = '';
  const paginationList = document.querySelector('.exersizes-pagination-list');
  if (error) {
    paginationList.innerHTML = '';
    return;
  }

  const pagesQuantity = resp.data.totalPages;
  paginationList.innerHTML = '';
  if (pagesQuantity > 1) {
    for (let i = 1; i <= pagesQuantity; i++) {
      if (i === 1) {
        paginationElements += `<li
                class="exersizes-pagination-item exersizes-pagination-item-active"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                  name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`;
      } else {
        paginationElements += `<li
                class="exersizes-pagination-item"
              >

          
     <button class="exersizes-pagination-btn"
                  type="button"
                    name="pagination-button"
                  
                >
                  ${i}
                </button>
              </li>`;
      }
    }
  }
  paginationList.insertAdjacentHTML('beforeend', paginationElements);
}

// ======================== Зміна стилів пагінації ========================

function changingPaginationBtnStyle(e) {
  const pageNumber = e.target.textContent.trim();
  const previousActiveBtn = document.querySelector(
    '.exersizes-pagination-item-active'
  );
  previousActiveBtn.classList.remove('exersizes-pagination-item-active');
  const currentActiveBtn = e.target;
  currentActiveBtn.classList.add('exersizes-pagination-item-active');
}

// =================== Функція повернення сторінки до форми пошуку ===================

function scrollToTopShowOrHide() {
  if (window.scrollY > 100) {
    document.querySelector('.up-link').classList.add('show');
  } else {
    document.querySelector('.up-link').classList.remove('show');
  }
}

// =================== Функція, що робить пошук видимим =========

function inputVisualisationAddListeners() {
  // const divLister = document.querySelector('.exersizes-input-container');
  const searchInput = document.querySelector('.exersizes-input');
  const searchBtn = document.querySelector('.exersizes-input-btn-s');
  const inputContainer = document.querySelector('.exersizes-input-container');
  const clearBtn = document.querySelector('.exersizes-input-btn');
  inputContainer.classList.remove('visually-hidden');
  searchInput.addEventListener('keyup', submitShowHideClean);
  searchBtn.addEventListener('click', searchByName);
}

// =================== Відправка за Ентером, показ/ховання хрестика та  чищення ===================
function submitShowHideClean(e) {
  const clearBtn = document.querySelector('.exersizes-input-btn');
  clearBtn.classList.remove('visually-hidden');
  if (e.target.value.trim().length > 0) {
    clearBtn.classList.remove('visually-hidden');
    clearBtn.addEventListener('click', simpleInputCleaning);
  }
  if (e.keyCode === 13) {
    searchByName(e);
    simpleInputCleaning();
    clearBtn.classList.add('visually-hidden');
  }
}

// =================== Функція очищення пошуку  Функція зверху замінює ===================

function showClearBtnAndCleaning() {
  const clearBtn = document.querySelector('.exersizes-input-btn');
  clearBtn.classList.remove('visually-hidden');
  const cleaning = e => {
    e.preventDefault();
    simpleInputCleaning();
    clearBtn.classList.add('visually-hidden');
  };
  clearBtn.addEventListener('click', cleaning);
}

// =================== Функція, що робить пошук невидимим =========

function inputHidingAndRemoveListeners() {
  const searchInput = document.querySelector('.exersizes-input');
  const searchBtn = document.querySelector('.exersizes-input-btn-s');
  const inputContainer = document.querySelector('.exersizes-input-container');
  const clearBtn = document.querySelector('.exersizes-input-btn');

  searchInput.removeEventListener('input', showClearBtnAndCleaning);
  searchInput.removeEventListener('click', searchByName);
  // searchBtn.removeEventListener('click', searchByName);
  inputContainer.classList.add('visually-hidden');
  clearBtn.classList.add('visually-hidden');
}

// =================== Функція, що очищує інпут =========

function simpleInputCleaning() {
  const searchInput = document.querySelector('.exersizes-input');
  const clearBtn = document.querySelector('.exersizes-input-btn');
  searchInput.value = '';
  clearBtn.classList.add('visually-hidden');
  clearBtn.removeEventListener('click', simpleInputCleaning);
}
// =================== Функція додавання спінера, стилю search-btn-disabled, змінення стану кнопки на відключено ===================

function addLoading() {
  const loaderContainer = document.querySelector(
    '.exersizes-header-filter-cont'
  );
  loaderContainer.insertAdjacentHTML(
    'afterbegin',
    '<span class="loader"></span>'
  );
}

// =================== Функція видалення спінера, стилю search-btn-disabled, змінення стану кнопки на включено, обнулення форми ===================

function removeLoading() {
  const loader = document.querySelector('.loader');
  loader.remove();
}

// =================== Скролл догори ===================

scrollToTopShowOrHide();

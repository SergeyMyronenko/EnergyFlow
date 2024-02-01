import { LOCAL_STORAGE_KEY } from './add-to-favorites';
import {renderFavorites} from './render'

// let favoritesList;
// let paginationButtons;

// const itemsPerPage = 6;
// if (window.location.pathname === '/favorites.html') {
//   favoritesList = document.querySelector('.favorites-list');
//   paginationButtons = document.querySelectorAll(
//     '.favorites-pagination-block button'
//   );
//   showPage(1);
  
//   paginationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const pageNumber = parseInt(button.textContent);
//       showPage(pageNumber);
//     });
//   });
// }

// function showPage(pageNumber) {
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const items = favoritesList.querySelectorAll('.favorites-list-item');
//   items.forEach((item, index) => {
//     if (index >= startIndex && index < endIndex) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });

//   paginationButtons.forEach(button => {
//     if (parseInt(button.textContent) === pageNumber) {
//       button.classList.add('active-btn');
//     } else {
//       button.classList.remove('active-btn');
//     }
//   });
// };

// const 

// пагінація
// async function filterFetchPag(filterType, filterSubType, page) {
//   const response = await axios.get('/filters', {
//     params: keyGen(filterType, filterSubType, page),
//   });

//   try {
//     if (response.data.results.length === 0) {
//       throw new Error('No results found...');
//     }
//     filterType = response.data.results[0].filter;
//     renderFilterImg(response);
//   } catch (error) {
//     renderMessage();
//   }
// };
export const cardsPerPage = 8;
export function pagination() {
  const favoritesWorkout = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let paginationElements = '';
  // if (error) {
  //   paginationList.innerHTML = '';
  //   return;
  // }
  const pagesQuantity = Math.ceil(favoritesWorkout.length / cardsPerPage);
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
};

function changingPaginationBtnStyle(e) {
  const pageNumber = e.target.textContent.trim();
  const previousActiveBtn = document.querySelector('.exersizes-pagination-item-active');
  const currentActiveBtn = e.target.parentElement;
  console.log(currentActiveBtn);
  previousActiveBtn.classList.remove('exersizes-pagination-item-active');
  currentActiveBtn.classList.add('exersizes-pagination-item-active');
  currentActiveBtn.style.border = 'var(--primary-color) 1px solid';
  currentActiveBtn.style.color = 'var(--primary-color)';
  previousActiveBtn.style.border = 'none';
  previousActiveBtn.style.color = 'rgba(27, 27, 27, 0.4)';
};

const paginationList = document.querySelector('.favorites-pagination-block');

paginationList.addEventListener("click", (e) => {
  if (e.target.classList.contains('exersizes-pagination-btn')) {
    changingPaginationBtnStyle(e);
    const favoritesContainer = document.querySelector('.favorites-contanier-block');
  favoritesContainer.innerHTML = '';
    renderFavorites(e);
  }
  
});


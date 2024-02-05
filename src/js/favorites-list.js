import { LOCAL_STORAGE_KEY } from './add-to-favorites';
import {renderFavorites, currentPage} from './render'


export const cardsPerPage = 8;
export function renderPagination() {
  if (window.location.pathname.endsWith("/favorites.html")) {
    const favoritesWorkout = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  let paginationElements = '';
  const paginationList = document.querySelector(".favorites-pagination-block");
  const pagesQuantity = Math.ceil(favoritesWorkout.length / cardsPerPage);
  paginationList.innerHTML = '';
  if (pagesQuantity > 1) {
    for (let i = 1; i <= pagesQuantity; i++) {
      if (i === 1) {
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
    const allPaginationBtns = document.querySelectorAll(".exersizes-pagination-btn");
    Array.from(allPaginationBtns).map((btn) => {
      if (Number(btn.textContent) === Number(currentPage)) {
        btn.parentElement.classList.add('exersizes-pagination-item-active');
        return;
      }
    })
  }
};
function changingPaginationBtnStyle(e) {
const previousActiveBtn = document.querySelector('.exersizes-pagination-item-active');
  const currentActiveBtn = e.target.parentElement;
  previousActiveBtn.classList.remove('exersizes-pagination-item-active');
  currentActiveBtn.classList.add('exersizes-pagination-item-active');
};
function scrollToTop(element) {
    const scrollHeight = element.getBoundingClientRect().y;
  window.scrollBy({
  top: scrollHeight,
  behavior: "smooth",
});
}

if (window.location.pathname.endsWith("/favorites.html")) {
  const paginationList = document.querySelector('.favorites-pagination-block');

  paginationList.addEventListener("click", (e) => {
  if (e.target.classList.contains('exersizes-pagination-btn')) {
    changingPaginationBtnStyle(e);
    const favoritesContainer = document.querySelector('.favorites-contanier-block');
  favoritesContainer.innerHTML = '';
    renderFavorites(e);
    scrollToTop(favoritesContainer.parentElement);

  };
});
}



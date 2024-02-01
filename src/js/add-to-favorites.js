import { getData } from './exercises-modal.js';

const addToFavoritesBtn = document.querySelector('.modal-button-favorites');
const modalExercises = document.querySelector('.modal');
const body = document.querySelector('body');
modalExercises.addEventListener('click', addToFavorites);

export const LOCAL_STORAGE_KEY = 'favoriteData';
export let inLocalStorage;

async function addToFavorites(e) {
  try {
    if (e.target.classList.contains('modal-button-favorites')) {
      inLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const itemId = await getData(e.target.dataset.id);
      const data = itemId.data;
      const findCopy = inLocalStorage.some(item => item._id === data._id);
      const modalHeart = document.querySelector('.modal-button-favorites-icon');
      const modalHeartSvg = document.querySelector('.modal-button-favorites-icon-svg');

      if (!findCopy) {
        inLocalStorage.push(data);
      } else {
        return;
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inLocalStorage));
      modalHeart.style.animation = 'scale-animation 500ms cubic-bezier(.46,.51,.73,.7)';
      modalHeart.style.fill = '#EEA10C';
      modalHeart.style.stroke = '#EEA10C';
    
      setTimeout(() => {
        modalExercises.classList.remove('is-open');
      }, 550);

      body.classList.remove('body-modal');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    // addToFavoritesBtn.removeEventListener('click', addToFavorites);
  }
}

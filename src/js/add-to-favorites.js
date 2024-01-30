import { getData } from './exercises-modal.js';
const addToFavoritesBtn = document.querySelector('.modal-button-favorites');
const modalWindow = document.querySelector('.modal');
document.addEventListener('click', addToFavorites);

export let FAVORITES_ID = 'favoriteData';
const inLocalStorage = JSON.parse(localStorage.getItem(FAVORITES_ID)) || [];

async function addToFavorites(e) {
  try {
    // const itemId = await getData(e.target.dataset.id);
    if (e.target.classList.contains('modal-button-favorites')) {
      const itemId = await getData(e.target.dataset.id);
      const data = itemId.data;
      const findCopy = inLocalStorage.some(item => item._id === data._id);

      if (!findCopy) {
        inLocalStorage.push(data);
      } else {
        return;
      }
      localStorage.setItem(FAVORITES_ID, JSON.stringify(inLocalStorage));
      modalWindow.classList.remove('is-open');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    //   addToFavoritesBtn.removeEventListener('click', addToFavorites);
  }
}

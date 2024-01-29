import { getData } from './exercises-modal.js';
const addToFavoritesBtn = document.querySelector('.modal-button-favorites');
const modalWindow = document.querySelector('.modal');
addToFavoritesBtn.addEventListener('click', addToFavorites);

let FAVORITES_ID = 'favoriteData';
const inLocalStorage = JSON.parse(localStorage.getItem(FAVORITES_ID)) || [];

async function addToFavorites(e) {
  try {
    // const itemId = await getData(e.target.dataset.id);
    const itemId = await getData('64f389465ae26083f39b17a4');
    const data = itemId.data;
    const findCopy = inLocalStorage.some(item => item._id === data._id);

    if (!findCopy) {
      inLocalStorage.push(data);
    } else {
      return;
    }
    localStorage.setItem(FAVORITES_ID, JSON.stringify(inLocalStorage));
    modalWindow.classList.remove('is-open');
  } catch (error) {
    console.log(error.message);
  } finally {
    addToFavoritesBtn.removeEventListener('click', addToFavorites);
  }
}

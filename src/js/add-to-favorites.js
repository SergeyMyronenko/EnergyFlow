import { getData } from './exercises-modal.js';
const addToFavoritesBtn = document.querySelector('.modal-button-favorites');

// addToFavoritesBtn.addEventListener('click', addToFavorites);

export const FAVORITES_ID = 'favoriteData';
const inLocalStorage = JSON.parse(localStorage.getItem(FAVORITES_ID)) || [];

async function addToFavorites(id) {
  try {
    const itemId = await getData(id);
    const data = itemId.data;

    inLocalStorage.push(data);
    localStorage.setItem(FAVORITES_ID, JSON.stringify(inLocalStorage));
  } catch (error) {
    console.log(error.message);
  }
}

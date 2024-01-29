import { getData } from './exercises-modal.js';
const addToFavoritesBtn = document.querySelector('.modal-button-favorites');
const favoritesList = document.querySelector('.favorites-list');

addToFavoritesBtn.addEventListener('click', addToFavorites);

async function addToFavorites() {
  try {
    const itemId = await getData('64f389465ae26083f39b17cd');
    console.log(itemId);
    const data = itemId.data.data;
    console.log(data);
    const FAVORITES_ID = data._id;
    console.log(FAVORITES_ID);
    let inLocalStorage = JSON.parse(localStorage.getItem(FAVORITES_ID) || []);
    console.log(inLocalStorage);
    inLocalStorage.push(data);
    localStorage.setItem(FAVORITES_ID, JSON.stringify(inLocalStorage));
    // favoritesList.insertAdjacentHTML('beforeend', renderItem(data));
  } catch (error) {
    console.log(error.message);
  }
}

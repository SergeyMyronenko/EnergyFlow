'use strict';

// import { FAVORITES_ID } from "./add-to-favorites";

// const inLocalStorage = storedData ? Object.values(storedData) : [];

// console.log(storedData);

export function renderFavorites() {
  const storedData = JSON.parse(localStorage.getItem('favoriteData')) || [];
  const favoritesContainer = document.querySelector(
    '.favorites-contanier-block'
  );

  favoritesContainer.innerHTML = '';

  if (storedData.length === 0) {
    favoritesContainer.innerHTML = `<img class="message-info-svg" src="./img/dumbbell.png" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`;
  }

  const favoritesList = document.createElement('ul');
  favoritesList.classList.add('favorites-list');
  favoritesContainer.appendChild(favoritesList);

  const favoritesHTML = storedData
    .map(
      item => `
    <li class="favorites-list-item">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${item._id}">
                <svg width="16" height="16" fill="none">
                  <use href="./img/sprite.svg#trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" type="button">
              Start
              <svg
                class="favorites-list-button-icon"
                width="14"
                height="14"
                stroke="#1B1B1B"
              >
                <use href="./img/sprite.svg#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="favorites-list-container">
            <svg class="favorite-list-svg" width="24" height="24">
              <use href="./img/sprite.svg#dude"></use>
            </svg>
            <h3 class="favorites-list-text">${item.name}</h3>
          </div>
          <div class="favorites-card-text">
            <ul class="favorites-card-text-list">
              <li class="favorites-card-text-item">
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Burned calories:</h4>
                  <p class="favorites-card-text-block">${item.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${item.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${item.target}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
    `
    )
    .join('');

  favoritesList.innerHTML = favoritesHTML;
}

document.addEventListener('DOMContentLoaded', renderFavorites);

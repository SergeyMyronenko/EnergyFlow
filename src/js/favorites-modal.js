import { getData, createMarkup } from './exercises-modal.js';
import './modals-functions.js';

const refs = {
  exerciseModal: document.querySelector('.modal'),
  exsCont: document.querySelector('.exs-container'),
};

document.addEventListener('click', openExerciseModal);

async function openExerciseModal(e) {
  try {
    if (e.target.classList.contains('favorites-list-button')) {
      const response = await getData(e.target.dataset.id);
      refs.exsCont.innerHTML = createMarkup(response.data);

      refs.exerciseModal.classList.toggle('is-open');
      const ratingActive = document.querySelector('.ex-rating-active');
      const ratingValue = document.querySelector('.modal-rating-value');
      ratingActive.style.width = await `${parseInt(ratingValue.textContent) / 0.05}%`;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

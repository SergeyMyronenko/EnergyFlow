import { getData, createMarkup } from './exercises-modal.js';
import './modals-functions.js';
import { updateRatingWidth } from './modals-functions.js';

const refs = {
  exerciseModal: document.querySelector('.modal'),
  exsCont: document.querySelector('.exs-container'),
  body: document.querySelector('body'),
};

document.addEventListener('click', openExerciseModal);

async function openExerciseModal(e) {
  try {
    if (e.target.classList.contains('favorites-list-button')) {
      const response = await getData(e.target.dataset.id);
      refs.exsCont.innerHTML = createMarkup(response.data);
      refs.exerciseModal.classList.toggle('is-open');
      updateRatingWidth();
      refs.body.classList.add('body-modal');
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

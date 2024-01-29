import axios from 'axios';
import { id } from './modals-functions';

const refs = {
  modalBackdrop: document.querySelector('.js-backdrop-modal'),
  form: document.querySelector('.js-rating-form'),
  exerciseModal: document.querySelector('.modal'),
  rateValue: document.querySelector('.js-rating-data'),
  stars: document.querySelectorAll('.rating-label'),
  openRatingBtn: document.querySelector('.modal-button-rating'),
};
refs.form.addEventListener('submit', getData);
refs.stars.forEach(star => {
  star.addEventListener('click', getRate);
});
function getRate(e) {
  refs.rateValue.textContent = `${e.target.dataset.rate}.0`;
}
async function getData(e) {
  e.preventDefault();
  try {
    const response = await axios.patch(
      `https://energyflow.b.goit.study/api/exercises/${id}/rating`,
      {
        rate: parseInt(e.target.elements.rating.value),
        email: e.target.elements.email.value.trim(),
        review: e.target.elements.comment.value.trim(),
      }
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    refs.modalBackdrop.classList.remove('is-open');
    refs.exerciseModal.classList.remove('is-open');
    e.target.reset();

    refs.stars.forEach(star => {
      star.removeEventListener('click', getRate);
    });
  }
}

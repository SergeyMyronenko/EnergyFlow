import axios from 'axios';
import { id } from './modals-functions';
import { operationSuccess } from './izitoasts';

const refs = {
  modalBackdrop: document.querySelector('.js-backdrop-modal'),
  form: document.querySelector('.js-rating-form'),
  exerciseModal: document.querySelector('.modal'),
  rateValue: document.querySelector('.js-rating-data'),
  starsContainer: document.querySelector('.js-stars-list'),
};

refs.form.addEventListener('submit', handleSubmit);
refs.starsContainer.addEventListener('click', handleStarClick);

function handleStarClick(e) {
  if (e.target.classList.contains('rating-label')) {
    refs.rateValue.textContent = `${e.target.dataset.rate}.0`;
  }
}

async function handleSubmit(e) {
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
    operationSuccess('Thank you! Your opinion really important for us!');
  } catch (error) {
    throw new Error(error.message);
  } finally {
    resetForm();
  }
}

export function resetForm() {
  refs.modalBackdrop.classList.remove('is-open');
  refs.exerciseModal.classList.remove('is-open');
  refs.rateValue.textContent = '0.0';
  refs.form.reset();
}

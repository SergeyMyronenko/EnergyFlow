import { rate } from './modals-functions';
import axios from 'axios';

const refs = {
  modalBackdrop: document.querySelector('.js-backdrop-modal'),
  form: document.querySelector('.js-rating-form'),
  exerciseModal: document.querySelector('.modal'),
};
const exerciseID = '64f389465ae26083f39b17a4';
refs.form.addEventListener('submit', getData);

async function getData(e) {
  e.preventDefault();

  try {
    const response = await axios.patch(
      `https://energyflow.b.goit.study/api/exercises/${exerciseID}/rating`,
      {
        rate: parseInt(rate),
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
    refs.form.removeEventListener('submit', getData);
  }
}

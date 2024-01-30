import { getData, createMarkup } from './exercises-modal';

export let id;
const refs = {
  ratingModal: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  rateStars: document.querySelector('.js-stars-list'),
  star: document.querySelectorAll('.js-rating-star'),
  openModalsBtn: document.querySelector('.exersizes-cards-container'),
  openRatingBtn: document.querySelector('.modal-button-rating'),
  exerciseModal: document.querySelector('.modal'),
  closeExerciseBtn: document.querySelector('.modal-button-close'),
  exsCont: document.querySelector('.exs-container'),
};

document.addEventListener('click', openModalHandler);
document.addEventListener('click', closeModalHandler);
document.addEventListener('keydown', closeModalByEsc);

function openModalHandler(e) {
  if (e.target.classList.contains('exersizes-card-btn')) {
    openExerciseModal(e);
  } else if (e.target.classList.contains('modal-button-rating')) {
    openRatingModal(e);
  }
}

async function openExerciseModal(e) {
  try {
    const response = await getData(e.target.dataset.id);
    refs.exsCont.innerHTML = createMarkup(response.data);
    refs.exerciseModal.classList.add('is-open');
    id = e.target.dataset.id;
    updateRatingWidth();
  } catch (error) {
    throw new Error(error.message);
  }
}

function openRatingModal(e) {
  refs.ratingModal.classList.toggle('is-open');
}

function updateRatingWidth() {
  const ratingActive = document.querySelector('.ex-rating-active');
  const ratingValue = document.querySelector('.modal-rating-value');
  ratingActive.style.width = `${parseInt(ratingValue.textContent) / 0.05}%`;
}

function closeModalHandler(e) {
  if (e.target.classList.contains('backdrop') && refs.ratingModal.classList.contains('is-open')) {
    refs.ratingModal.classList.remove('is-open');
  } else if (
    e.target.classList.contains('backdrop') &&
    refs.exerciseModal.classList.contains('is-open')
  ) {
    refs.exerciseModal.classList.remove('is-open');
  } else if (
    e.target.classList.contains('modal-button-close') ||
    e.target.classList.contains('modal-button-close-icon') ||
    e.target.classList.contains('modal-button-close-use')
  ) {
    refs.exerciseModal.classList.remove('is-open');
  } else if (
    e.target.classList.contains('rating-close') ||
    e.target.classList.contains('rating-close-svg') ||
    e.target.classList.contains('rating-close-use')
  ) {
    refs.ratingModal.classList.remove('is-open');
  }
}

function closeModalByEsc(e) {
  if (e.code === 'Escape' && refs.ratingModal.classList.contains('is-open')) {
    refs.ratingModal.classList.remove('is-open');
  } else if (e.code === 'Escape' && refs.exerciseModal.classList.contains('is-open')) {
    refs.exerciseModal.classList.remove('is-open');
  }
}

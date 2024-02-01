import { getData, createMarkup } from './exercises-modal';
import { resetForm } from './send-rating-modal';
import { LOCAL_STORAGE_KEY } from './add-to-favorites';
import { operationSuccess } from './izitoasts';
// import { removeWorkoutCard } from './delete-from-favorites';

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
  body: document.querySelector('body'),
};

document.addEventListener('click', openModalHandler);
document.addEventListener('click', closeModalHandler);
document.addEventListener('keydown', closeModalByEsc);

function openModalHandler(e) {
  if (e.target.classList.contains('exersizes-card-btn')) {
    openExerciseModal(e);
  } else if (e.target.classList.contains('modal-button-rating')) {
    openRatingModal(e);
  } else if (e.target.classList.contains('modal-button-favorites-rem')) {
    handleRemoveFromFavorites(e);
  }
}

async function openExerciseModal(e) {
  try {
    const response = await getData(e.target.dataset.id);
    refs.exsCont.innerHTML = createMarkup(response.data);
    refs.exerciseModal.classList.add('is-open');
    id = e.target.dataset.id;
    updateRatingWidth();
    refs.body.classList.add('body-modal');
  } catch (error) {
    throw new Error(error.message);
  }
}

function openRatingModal(e) {
  refs.ratingModal.classList.toggle('is-open');
}

export function updateRatingWidth() {
  const ratingActive = document.querySelector('.ex-rating-active');
  const ratingValue = document.querySelector('.modal-rating-value');
  ratingActive.style.width = `${parseFloat(ratingValue.textContent) / 0.05}%`;
}

function closeModalHandler(e) {
  if (e.target.classList.contains('backdrop') && refs.ratingModal.classList.contains('is-open')) {
    refs.ratingModal.classList.remove('is-open');
  } else if (
    e.target.classList.contains('backdrop') &&
    refs.exerciseModal.classList.contains('is-open')
  ) {
    refs.body.classList.remove('body-modal');
    resetForm();
  } else if (
    e.target.classList.contains('modal-button-close') ||
    e.target.classList.contains('modal-button-close-icon') ||
    e.target.classList.contains('modal-button-close-use')
  ) {
    refs.body.classList.remove('body-modal');
    resetForm();
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
    resetForm();
    refs.body.classList.remove('body-modal');
  }
}

function handleRemoveFromFavorites(e) {
  const favoritesWorkout = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const newFavoritesWorkouts = JSON.stringify(
    favoritesWorkout.filter(workout => workout._id !== e.target.dataset.id)
  );
  localStorage.setItem(LOCAL_STORAGE_KEY, newFavoritesWorkouts);

  refs.body.classList.remove('body-modal');
  // operationSuccess('You have removed it from favorites');
  // removeWorkoutCard(e.target.d ataset.id);
  resetForm();
}

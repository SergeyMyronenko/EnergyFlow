import { getData, createMarkup } from './exercises-modal';

const refs = {
  ratingModal: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  form: document.querySelector('.js-rating-form'),
  rateStars: document.querySelector('.js-stars-list'),
  star: document.querySelectorAll('.js-rating-star'),
  openModalsBtn: document.querySelector('.exersizes-result-card-container'),
  openRatingBtn: document.querySelector('.modal-button-rating'),
  exerciseModal: document.querySelector('.modal'),
  closeExerciseBtn: document.querySelector('.modal-button-close'),
  exsCont: document.querySelector('.exs-container'),
};

// ========= OPEN LISTENERS =======//
refs.openModalsBtn.addEventListener('click', openExerciseModal);
refs.openRatingBtn.addEventListener('click', openRatingModal);

// ========= CLOSE LISTENERS =======//
document.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);
refs.closeBtn.addEventListener('click', closeModalByBtn);
refs.closeExerciseBtn.addEventListener('click', closeExerciseModalByBtn);
async function openExerciseModal(e) {
  try {
    if (e.target.classList.contains('exersizes-card-btn')) {
      const response = await getData('64f389465ae26083f39b17cd');
      refs.exsCont.innerHTML = createMarkup(response.data);
      refs.exerciseModal.classList.toggle('is-open');
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function openRatingModal(e) {
  if (e.currentTarget) {
    createMarkup(getData('64f389465ae26083f39b18d'));
    refs.ratingModal.classList.toggle('is-open');
  }
}

function closeModal(e) {
  if (
    e.target.classList.contains('backdrop') &&
    refs.ratingModal.classList.contains('is-open')
  ) {
    refs.ratingModal.classList.remove('is-open');
    return;
  }
  if (
    e.target.classList.contains('backdrop') &&
    refs.exerciseModal.classList.contains('is-open')
  ) {
    refs.exerciseModal.classList.remove('is-open');
  }
}
function closeModalByBtn(e) {
  if (e.currentTarget) {
    refs.ratingModal.classList.remove('is-open');
  }
}
function closeExerciseModalByBtn(e) {
  if (e.currentTarget) {
    refs.exerciseModal.classList.remove('is-open');
  }
}

function closeModalByEsc(e) {
  if (e.code === 'Escape' && refs.ratingModal.classList.contains('is-open')) {
    refs.ratingModal.classList.remove('is-open');
    return;
  }
  if (e.code === 'Escape' && refs.exerciseModal.classList.contains('is-open')) {
    refs.exerciseModal.classList.remove('is-open');
  }
}

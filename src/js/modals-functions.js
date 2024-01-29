import { getData, createMarkup } from './exercises-modal';

const refs = {
  ratingModal: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  form: document.querySelector('.js-rating-form'),
  rateStars: document.querySelector('.js-stars-list'),
  star: document.querySelectorAll('.js-rating-star'),
  openModalsBtn: document.querySelector('.exersizes-cards-container'),
  openRatingBtn: document.querySelector('.modal-button-rating'),
  exerciseModal: document.querySelector('.modal'),
  closeExerciseBtn: document.querySelector('.modal-button-close'),
  exsCont: document.querySelector('.exs-container'),
};

// ========= OPEN LISTENERS =======//
refs.openRatingBtn.addEventListener('click', openRatingModal);
document.addEventListener('click', openExerciseModal);

// ========= CLOSE LISTENERS =======//
document.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);
refs.closeBtn.addEventListener('click', closeModalByBtn);
refs.closeExerciseBtn.addEventListener('click', closeExerciseModalByBtn);

// ========= MAIN FUNCTION =======//
async function openExerciseModal(e) {
  try {
    if (e.target.classList.contains('exersizes-card-btn')) {
      const response = await getData(e.target.dataset.id);
      refs.exsCont.innerHTML = createMarkup(response.data);

      refs.exerciseModal.classList.toggle('is-open');
      const ratingActive = document.querySelector('.ex-rating-active');
      const ratingValue = document.querySelector('.modal-rating-value');
      ratingActive.style.width = await `${
        parseInt(ratingValue.textContent) / 0.05
      }%`;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// ========= OPEN/CLOSE FUNCTIONS =======//

async function openRatingModal(e) {
  if (e.currentTarget) {
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

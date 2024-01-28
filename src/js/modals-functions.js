export let rate = 0;
const refs = {
  ratingModal: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  form: document.querySelector('.js-rating-form'),
  rateStars: document.querySelector('.js-stars-list'),
  rateValue: document.querySelector('.js-rating-data'),
  star: document.querySelectorAll('.js-rating-star'),
  openModalsBtn: document.querySelector('.exersizes-result-card-container'),
  openRatingBtn: document.querySelector('.modal-button-rating'),
  exerciseModal: document.querySelector('.modal'),
  closeExerciseBtn: document.querySelector('.modal-button-close'),
};

// ========= OPEN LISTENERS =======//
refs.openModalsBtn.addEventListener('click', openExerciseModal);
refs.openRatingBtn.addEventListener('click', openRatingModal);

// ========= CLOSE LISTENERS =======//
document.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);
refs.closeBtn.addEventListener('click', closeModalByBtn);
refs.closeExerciseBtn.addEventListener('click', closeExerciseModalByBtn);

refs.rateStars.addEventListener('click', getRate);

function openExerciseModal(e) {
  if (e.target.classList.contains('exersizes-card-btn')) {
    refs.exerciseModal.classList.toggle('is-open');
  }
}
function openRatingModal(e) {
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

function getRate(e) {
  let activeStar = refs.rateStars.querySelector('.star-active');
  e.target.classList.add('star-active');

  if (activeStar) {
    activeStar.classList.remove('star-active');
  }

  refs.rateValue.textContent = `${e.target.dataset.rate}.0`;
  if (!e.target.classList.contains('star-active')) {
    refs.rateValue.textContent = '0.0';
  }
  rate = e.target.dataset.rate;
}

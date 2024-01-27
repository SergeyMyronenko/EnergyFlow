export let rate = 0;
const refs = {
  modalBackdrop: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  form: document.querySelector('.js-rating-form'),
  rateStars: document.querySelector('.js-stars-list'),
  rateValue: document.querySelector('.js-rating-data'),
  star: document.querySelectorAll('.js-rating-star'),
};

window.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);
refs.closeBtn.addEventListener('click', closeModalByBtn);
refs.rateStars.addEventListener('click', getRate);

function closeModal(e) {
  if (e.target.classList.contains('backdrop')) {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('click', closeModal);
  }
}
function closeModalByBtn(e) {
  if (e.currentTarget) {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('click', closeModal);
  }
}
function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('click', closeModal);
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

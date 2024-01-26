const refs = {
  modalBackdrop: document.querySelector('.js-backdrop-modal'),
  closeBtn: document.querySelector('.js-rating-close'),
  form: document.querySelector('.js-rating-form'),
  rateStars: document.querySelector('.js-stars-list'),
  rateValue: document.querySelector('.js-rating-data'),
  star: document.querySelectorAll('.js-rating-star'),
};
let rate = 0;

window.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);
refs.closeBtn.addEventListener('click', closeModalByBtn);
refs.form.addEventListener('submit', getData);
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
  let currentStar = e.target;
  let activeStar = refs.rateStars.querySelector('.star-active');

  currentStar.classList.add('star-active');
  if (activeStar) {
    activeStar.classList.remove('star-active');
  }

  setTimeout(() => {
    refs.rateValue.textContent = `${currentStar.dataset.rate}.0`;
  }, 0);
  rate = currentStar.dataset.rate;
}

function getData(e) {
  e.preventDefault();
  console.log({
    rating: rate,
    email: e.target.elements.email.value,
    comment: e.target.elements.comment.value,
  });
  refs.modalBackdrop.classList.remove('is-open');
  refs.form.removeEventListener('submit', getData);
}

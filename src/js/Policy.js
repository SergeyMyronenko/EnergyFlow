export default function privacyModal() {
  const privacy = document.querySelector('.foter-privacy-policy');
  const terms = document.querySelector('.footer-terms-of-service');
  const termsOverlay = document.querySelector('.modal-overlay');
  const privacyOverlay = document.querySelector('.privacy-modal-overlay');

  privacy.addEventListener('click', () => privacyOverlay.classList.add('is-open'));
  terms.addEventListener('click', () => termsOverlay.classList.add('is-open'));
  privacyOverlay.addEventListener('click', () => privacyOverlay.classList.remove('is-open'));
  termsOverlay.addEventListener('click', () => termsOverlay.classList.remove('is-open'));
}

if (window.location.pathname === '/index.html') {
  privacyModal();
}
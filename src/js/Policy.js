export default function policyModal() {
  const policy = document.querySelector('.foter-policy');
  const service = document.querySelector('.footer-service');
  const serviceOverlay = document.querySelector('.modal-overlay');
  const policyOverlay = document.querySelector('.policy-modal-overlay');

  policy.addEventListener('click', () => policyOverlay.classList.add('is-open'));
  service.addEventListener('click', () => serviceOverlay.classList.add('is-open'));
  policyOverlay.addEventListener('click', () => policyOverlay.classList.remove('is-open'));
  serviceOverlay.addEventListener('click', () => serviceOverlay.classList.remove('is-open'));
}

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

if (result === '/index.html' || result === '/') {
  policyModal();
}
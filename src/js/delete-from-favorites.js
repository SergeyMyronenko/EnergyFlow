import { LOCAL_STORAGE_KEY } from './add-to-favorites';

export function removeFromFavotites(removedWorkoutID) {
  const favoritesWorkout = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const newFavoritesWorkouts = JSON.stringify(
    favoritesWorkout.filter(workout => workout._id !== removedWorkoutID)
  );
  localStorage.setItem(LOCAL_STORAGE_KEY, newFavoritesWorkouts);
}
function animationOfDisapiaring(deletedElement) {
  deletedElement.style.animation = 'opacity-animation 1s ease-out';

  setTimeout(() => {
    deletedElement.style.transform = 'translateX(-200%)';
  }, 100);

  setTimeout(() => {
    deletedElement.style.position = 'absolute';
    deletedElement.style.top = '0px';
    deletedElement.style.left = '0px';
  }, 450);

  setTimeout(() => deletedElement.remove(), 1000);
}

export function removeWorkoutCard(removedWorkoutID) {
  const deletedWorkoutCard = document.querySelector(`[data-id="${removedWorkoutID}"]`).parentElement
    .parentElement.parentElement;
  animationOfDisapiaring(deletedWorkoutCard);
};

const favoritesWotkoutContainer = document.querySelector('.favorites-contanier-block');

if (window.location.pathname === "/favorites.html") {
  favoritesWotkoutContainer.addEventListener('click', e => {
    if (e.target.classList.contains('favorites-icon-svg')) {
      const workoutIdToDelete = e.target.dataset.id;
      removeFromFavotites(workoutIdToDelete);
      removeWorkoutCard(workoutIdToDelete);
    }
    return;
  });
};
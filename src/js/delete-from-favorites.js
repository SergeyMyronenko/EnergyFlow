import { LOCAL_STORAGE_KEY, inLocalStorage } from './add-to-favorites';
import { renderFavorites } from './render';

function removeFromFavotites(removedWorkoutID) {

    const newFavoritesWorkouts = JSON.stringify(inLocalStorage.filter((workout) => workout._id !== removedWorkoutID));
    localStorage.setItem(LOCAL_STORAGE_KEY, newFavoritesWorkouts);
};

const favoritesWotkoutContainer = document.querySelector(".favorites-contanier-block")

favoritesWotkoutContainer.addEventListener("click", (e) => {
    const workoutIdToDelete = e.target.dataset.id;
    removeFromFavotites(workoutIdToDelete);
    renderFavorites();
})


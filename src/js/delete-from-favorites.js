import { LOCAL_STORAGE_KEY} from './add-to-favorites';


export function removeFromFavotites(removedWorkoutID) {
    const favoritesWorkout = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const newFavoritesWorkouts = JSON.stringify(favoritesWorkout.filter((workout) => workout._id !== removedWorkoutID));
    localStorage.setItem(LOCAL_STORAGE_KEY, newFavoritesWorkouts);
};

function removeWorkoutCard(removedWorkoutID) {
    const deletedWorkoutCard = document.querySelector(`[data-id="${removedWorkoutID}"]`).parentElement.parentElement.parentElement;

    // deletedWorkoutCard.style.transform = "translateX(-200%)"
    // setTimeout(() => {
    // deletedWorkoutCard.style.position = "absolute";
    // deletedWorkoutCard.style.top = "0px";
    // deletedWorkoutCard.style.left = "0px";
    // },300)
    
    // setTimeout(() => deletedWorkoutCard.remove(),500)
};

const favoritesWotkoutContainer = document.querySelector(".favorites-contanier-block")

favoritesWotkoutContainer.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
        const workoutIdToDelete = e.target.dataset.id;
        removeFromFavotites(e.target.dataset.id);
        removeWorkoutCard(workoutIdToDelete);
        }
    return;
})


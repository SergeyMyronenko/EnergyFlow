import { FAVORITES_ID } from './add-to-favorites'

function removeFromFavotites(removedWorkoutID) {

    const newFavoritesWorkouts = data.filter((workout) => workout._id !== removedWorkoutID);

    localStorage.setItem(FAVORITES_ID, newFavoritesWorkouts);
 
}

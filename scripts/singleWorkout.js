import { ExerciseCard } from "./exerciseCard.js";

const queryParams = new URLSearchParams(window.location.search);
console.log(queryParams);

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('single-workout-card-container-div').appendChild(
        ExerciseCard(queryParams.get('imageSrc'),
                        queryParams.get('workoutName'),
                        queryParams.get('numberOfSets'),
                        queryParams.get('numberOfReps'))
    )
});
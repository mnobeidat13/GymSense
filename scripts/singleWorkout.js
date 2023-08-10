import { ExerciseCard } from "./exerciseCard.js";

const queryParams = new URLSearchParams(window.location.search);
const parameter1 = queryParams.get('numberOfReps');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('background-image-div').appendChild(
        ExerciseCard(queryParams.get('imageSrc'),
                        queryParams.get('workoutName'),
                        queryParams.get('numberOfSets'),
                        queryParams.get('numberOfReps'))
    )
    });
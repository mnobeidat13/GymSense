import { ExerciseCard } from "./exerciseCard.js";


export function createSmallWorkoutCard(imageSrc, workoutName, numberOfSets, numberOfReps) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('small-workout-card');

    cardDiv.addEventListener('click', function(event){
        // cardDiv.classList.toggle('selected')

        if(window.location.pathname == '/workout.html'){
            const data = {
                imageSrc: imageSrc,
                workoutName: workoutName,
                numberOfSets: numberOfSets,
                numberOfReps: numberOfReps
            };

            const queryParams = new URLSearchParams(data).toString();
            const nextPageURL = `singleWorkout.html?${queryParams}`;

            window.location.href = nextPageURL;
        }

        if(window.location.pathname == '/setWorkout.html'){
            var container = document.getElementById('workout-card-container')

            const closeButton = document.getElementById('card-container-close-button');
            console.log(closeButton);
            for (let child of container.children) {
            if (child !== closeButton) {
                container.removeChild(child);
                console.log(child.className)
            }
            }

            container.appendChild(
                ExerciseCard(imageSrc, workoutName, numberOfSets, numberOfReps, false)
            )
            container.style.display = 'flex'
        }
    })

    const image = document.createElement('img');
    image.classList.add('small-workout-card-image');
    image.src = imageSrc;

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = workoutName;

    const setsHeading = document.createElement('h4');
    setsHeading.textContent = `Sets: ${numberOfSets}`;

    const repsHeading = document.createElement('h4');
    repsHeading.textContent = `Reps: ${numberOfReps}`;

    cardDiv.appendChild(image);
    cardDiv.appendChild(nameHeading);
    cardDiv.appendChild(setsHeading);
    cardDiv.appendChild(repsHeading);

    return cardDiv;
}
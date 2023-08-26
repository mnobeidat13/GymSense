import { ExerciseCard } from "./exerciseCard.js";
import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/esm-browser/index.js';

const selectedCards = []

export function getSelectedCards(){
    return selectedCards
}

export function createSmallWorkoutCard(imageSrc, workoutName, numberOfSets, numberOfReps, orientation='horizontal') {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('small-workout-card', orientation);

    const uniqueId = uuidv4()

    const cardData = {
        workoutId: uniqueId,
        workoutName: workoutName,
        numberOfSets: numberOfSets,
        numberOfReps: numberOfReps
    };
    cardDiv.cardData = cardData;


    cardDiv.addEventListener('click', function(event){
        // cardDiv.classList.toggle('selected')

        if(window.location.pathname.includes('workout.html')){
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

        if(window.location.pathname.includes('setWorkout.html')){
            cardDiv.classList.toggle('selected')
            selectedCards.forEach((card)=> card.classList.remove('selected'))
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
                ExerciseCard(imageSrc, workoutName, numberOfSets, numberOfReps)
            )
            container.style.display = 'flex'
        }
        if(window.location.pathname.includes('editWorkouts.html')){
            cardDiv.classList.toggle('selected')
            const index = selectedCards.indexOf(cardDiv.cardData);
            if (index !== -1) {
                selectedCards.splice(index, 1);
            }
            else {
                selectedCards.push(cardDiv.cardData);
            }
        }
    })

    const image = document.createElement('img');
    image.classList.add('small-workout-card-image');
    image.src = imageSrc;

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = workoutName;

    const setsHeading = document.createElement('h5');
    setsHeading.textContent = `Sets: ${numberOfSets}`;

    const repsHeading = document.createElement('h5');
    repsHeading.textContent = `Reps: ${numberOfReps}`;

    // Create a div to wrap the heading elements
    const headingsDiv = document.createElement('div');
    headingsDiv.classList.add('heading-container'); // You can add your own class here if needed

    // Append heading elements to the headingsDiv
    headingsDiv.appendChild(nameHeading);
    headingsDiv.appendChild(setsHeading);
    headingsDiv.appendChild(repsHeading);

    // Append the image and headingsDiv to the cardDiv
    cardDiv.appendChild(image);
    cardDiv.appendChild(headingsDiv);


    return cardDiv;
}
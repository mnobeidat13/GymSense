function createSmallWorkoutCard(imageSrc, workoutName, numberOfSets, numberOfReps) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('small-workout-card');

    cardDiv.addEventListener('click', function(event){
        cardDiv.classList.toggle('selected')
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
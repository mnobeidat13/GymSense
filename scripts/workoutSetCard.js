export function createWorkoutSetCard(imageSrc, mainTarget, muscles, orientation = 'horizontal') {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('set-workout-card');
    cardDiv.classList.add(orientation);

    cardDiv.addEventListener('click', function(event) {
        cardDiv.classList.toggle('selected');
        window.location.href = 'setWorkout.html';
    });

    const image = document.createElement('img');
    image.classList.add('set-workout-card-image');
    image.src = imageSrc;

    const contentDiv = document.createElement('div'); // Div to wrap headings
    contentDiv.classList.add('set-workout-card-content');

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = mainTarget;

    const setsHeading = document.createElement('h4');
    setsHeading.textContent = muscles;

    contentDiv.appendChild(nameHeading);
    contentDiv.appendChild(setsHeading);

    cardDiv.appendChild(image);
    cardDiv.appendChild(contentDiv);

    return cardDiv;
}

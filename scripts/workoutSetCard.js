function createWorkoutSetCard(imageSrc, mainTarget, muscles) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('small-workout-card');

    cardDiv.addEventListener('click', function(event){
        cardDiv.classList.toggle('selected')
    })

    const image = document.createElement('img');
    image.classList.add('small-workout-card-image');
    image.src = imageSrc;

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = mainTarget;

    const setsHeading = document.createElement('h4');
    setsHeading.textContent = muscles;


    cardDiv.appendChild(image);
    cardDiv.appendChild(nameHeading);
    cardDiv.appendChild(setsHeading);

    return cardDiv;
}
import { Counter } from "./counter.js";

export function mock(){
    var button = document.createElement('button')
    button.textContent = 'button'
    return button
}

function createExerciseCard(imgSrc, title, sets, reps, right = false, left = false) {
    let resultsLabel;

    // Initialize counter object using the Counter function
    var counter = Counter(sets = 4);
    var length = Object.keys(counter).length;
    var setCounter = 0;

    // Define colors for different states
    const activeColor = '#3d675ae6';
    const inactiveColor = '#499c83';
    const finishedColor = '#499c83';

    // Create a checkmark image element
    const checkMark = document.createElement('img');
    checkMark.src = 'resources/checkSign.gif';
    checkMark.setAttribute('class', 'checkImage');

    // Event listener for the "Next Set" button
    function nextSetButtonEventListner(event) {
      // Check if there are more sets remaining
      if (setCounter < length - 1) {
        counter[setCounter].innerCounterDiv.style.backgroundColor = finishedColor;
        counter[setCounter + 1].innerCounterDiv.style.backgroundColor = activeColor;
        counter[setCounter + 1].weightInput.focus();
        counter[setCounter].weightInput.disabled = true;
        setCounter += 1;
      } else {
        counter[setCounter].innerCounterDiv.style.backgroundColor = finishedColor;
        counter[setCounter].weightInput.disabled = true;
        exerciseCard.appendChild(finishButton);
        exerciseCard.removeChild(this);
        setCounter = 1;
      }
    }

    // Event listener for the "Start" button
    function startButtonEventListner() {
      counter[1].innerCounterDiv.style.backgroundColor = activeColor;
      setCounter += 1;
      exerciseCard.removeChild(start);
      exerciseCard.appendChild(counter.counterDiv);
      exerciseCard.appendChild(nextSetButton);
      counter[1].weightInput.focus();
    }

    // Event listener for the "Finish" button
    function finishButtonEventListner() {
      exerciseCard.appendChild(checkMark);
      exerciseCard.appendChild(nextResetDiv);
      exerciseCard.removeChild(this);

      // Create a data item object to store exercise data
      var dataItem = {};
      var currentDate = new Date();
      currentDate = currentDate.toISOString().split('T');
      dataItem.Date = currentDate;
      dataItem.exerciseName = title;

      // Iterate over the counter object to get weight values
      Object.keys(counter).forEach(function (key) {
        if (key.length == 1) {
          var value = counter[key].weightInput.value;
          dataItem['Set_' + key] = parseInt(value);
        }
      });

      // Add data to the database using the addData function
      addData(db, dataItem);
    }

    // Event listener for the "Reset" button
    function resetButtonEventListner() {
      exerciseCard.removeChild(counter.counterDiv);
      exerciseCard.removeChild(nextResetDiv);
      counter = Counter(sets = 4);
      exerciseCard.appendChild(counter.counterDiv);
      exerciseCard.appendChild(nextSetButton);
      counter[1].innerCounterDiv.style.backgroundColor = activeColor;
      counter[1].weightInput.focus();
    }

    // Create elements for image and navigation buttons
    var imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';

    var exerciseImg = document.createElement('img');
    exerciseImg.classList.add('exerciseImg');
    exerciseImg.src = imgSrc;

    var forward = document.createElement('button');
    forward.innerHTML = "<i class='far fa-arrow-alt-circle-right'></i>";
    forward.classList.add('navButton');
    forward.style.cssText = 'position: absolute; right: -25px; bottom: 25px;';
    forward.addEventListener('click', function() {
      cardsContainer.scroll({
        left: cardsContainer.scrollLeft + exerciseCard.offsetWidth,
        behavior: 'smooth'
      });
    });

    var backward = document.createElement('button');
    backward.innerHTML = "<i class='far fa-arrow-alt-circle-left'></i>";
    backward.classList.add('navButton');
    backward.style.cssText = 'position: absolute; left: -25px; bottom: 25px;';
    backward.addEventListener('click', function() {
      cardsContainer.scroll({
        left: cardsContainer.scrollLeft - exerciseCard.offsetWidth,
        behavior: 'smooth'
      });
    });

    imgContainer.appendChild(exerciseImg);
    if (left) {
      imgContainer.appendChild(forward);
    }
    if (right) {
      imgContainer.appendChild(backward);
    }

    // Create exercise card element and its components
    var exerciseCard = document.createElement('div');
    exerciseCard.classList.add('exerciseCard');

    var titleH = document.createElement('h2');
    titleH.textContent = title;

    var targetDiv = document.createElement('div');
    targetDiv.classList.add('targetDiv');

    var nSets = document.createElement('h4');
    nSets.textContent = sets + ' Sets';
    nSets.classList.add('sets');

    var nReps = document.createElement('h4');
    nReps.textContent = reps + ' Reps';
    nReps.classList.add('reps');

    targetDiv.appendChild(nSets);
    targetDiv.appendChild(nReps);

    // Create start button and attach event listener
    var start = document.createElement('button');
    start.textContent = 'Start';
    start.classList.add('actionButton');
    start.addEventListener('click', startButtonEventListner);

    // Create next set button and attach event listener
    var nextSetButton = document.createElement('button');
    nextSetButton.textContent = 'Next Set';
    nextSetButton.classList.add('actionButton');
    nextSetButton.addEventListener('click', nextSetButtonEventListner);

    // Create finish button and attach event listener
    var finishButton = document.createElement('button');
    finishButton.textContent = 'Finish!';
    finishButton.classList.add('actionButton');
    finishButton.addEventListener('click', finishButtonEventListner);

    // Create reset button and attach event listener
    var resetButton = document.createElement('button');
    resetButton.classList.add('actionButton');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', resetButtonEventListner);

    // Create next workout button
    var nextWorkoutButton = document.createElement('button');
    nextWorkoutButton.innerHTML = "Next <i class='fas fa-angle-double-right'></i>";
    nextWorkoutButton.classList.add('actionButton');
    nextWorkoutButton.style.cssText = 'textAlign:left; paddingLeft:10px';
    nextWorkoutButton.addEventListener('click', function() {
      cardsContainer.scroll({
        left: cardsContainer.scrollLeft + exerciseCard.offsetWidth,
        behavior: 'smooth'
      });
    });

    // Create div for next/reset buttons
    var nextResetDiv = document.createElement('div');
    nextResetDiv.classList.add('nextResetDiv');
    nextResetDiv.appendChild(resetButton);
    nextResetDiv.appendChild(nextWorkoutButton);

    //Add exercise card components to the exercise card element

    exerciseCard.appendChild(imgContainer);
    exerciseCard.appendChild(titleH);
    exerciseCard.appendChild(targetDiv);
    exerciseCard.appendChild(start);

    // Return the exercise card element
    return exerciseCard;
  }

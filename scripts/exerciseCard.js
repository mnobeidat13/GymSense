// Import necessary functions from other modules
import { Counter } from "./counter.js";
import { addData, retrieveData } from "./database.js";

let db;
const activeColor = '#3d675ae6';
const finishedColor = '#499c83';

// Function to initialize the database by setting the global db variable
export function initializeDatabase(dbObject) {
  db = dbObject;
}

// Function to create an exercise card element
export function ExerciseCard(imgSrc, title, sets, reps) {
  // const { backBtn = true, right = false, left = false } = options;

  // Initialize counter object using the Counter function
  var counter = Counter(sets = 4);
  var length = Object.keys(counter).length;
  var setCounter = 0;

  // Events Handlers
  function nextSetButtonEvent(event) {
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

  function startButtonEvent() {
    counter[1].innerCounterDiv.style.backgroundColor = activeColor;
    setCounter += 1;
    exerciseCard.removeChild(startButton);
    exerciseCard.appendChild(counter.counterDiv);
    exerciseCard.appendChild(nextSetButton);
    counter[1].weightInput.focus();
  }

  function finishButtonEvent() {
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
    console.log(dataItem);
    addData(db, dataItem);
    retrieveData()
  }

  function resetButtonEvent() {
    exerciseCard.removeChild(counter.counterDiv);
    exerciseCard.removeChild(nextResetDiv);
    exerciseCard.removeChild(checkMark);

    counter = Counter(sets = 4);
    exerciseCard.appendChild(counter.counterDiv);
    exerciseCard.appendChild(nextSetButton);
    counter[1].innerCounterDiv.style.backgroundColor = activeColor;
    counter[1].weightInput.focus();
  }

  // Creating Elements
  function createImageContainer(src) {
    const container = document.createElement('div');
    container.style.position = 'relative';

    const exerciseImg = document.createElement('img');
    exerciseImg.classList.add('exerciseImg');
    exerciseImg.src = src;

    container.appendChild(exerciseImg);

    return container;
  }

  function createTitleHeader(title) {
    const header = document.createElement('h2');
    header.textContent = title;
    return header;
  }

  function createHeaderText(text) {
    const header = document.createElement('h4');
    header.textContent = text;
    header.classList.add('sets', 'reps');
    return header;
  }

  function createTargetDiv(sets, reps) {
    const div = document.createElement('div');
    div.classList.add('targetDiv');

    const nSets = createHeaderText(sets + ' Sets');
    const nReps = createHeaderText(reps + ' Reps');

    div.appendChild(nSets);
    div.appendChild(nReps);

    return div;
  }

  function createActionButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('actionButton');
    button.addEventListener('click', onClick);
    return button;
  }

  // Create next workout button
  function createBackButton() {
    const backButton = document.createElement('button');
    backButton.innerHTML = "Back <i class='fas fa-angle-double-right'></i>";
    backButton.classList.add('actionButton');
    backButton.style.cssText = 'textAlign:left; paddingLeft:10px';
    backButton.addEventListener('click', function() {
      if (window.location.pathname.includes('/singleWorkout.html')) {
        history.back();
      }
      if (window.innerWidth <= 600) {
        document.getElementById('workout-card-container').style.display = 'none';
      }
    });
    return backButton;
  }

  function createCloseButton() {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.id = 'card-container-close-button';
    closeButton.addEventListener('click', function() {
      document.getElementById('workout-card-container').style.display = 'none';
    });
    return closeButton;
  }

  // Create a checkmark image element
  const checkMark = document.createElement('img');
  checkMark.src = 'resources/checkSign.gif';
  checkMark.setAttribute('class', 'checkImage');

  // Using defined Functions to create elements
  const imgContainer = createImageContainer(imgSrc);
  const titleH = createTitleHeader(title);
  const targetDiv = createTargetDiv(sets, reps);
  var startButton = createActionButton('Start', startButtonEvent);
  var nextSetButton = createActionButton('Next Set', nextSetButtonEvent)
  var finishButton = createActionButton('Finish!', finishButtonEvent)
  var resetButton = createActionButton('Reset', resetButtonEvent)
  var backButton = createBackButton()

  // Create div for next/reset buttons
  var nextResetDiv = document.createElement('div');
  nextResetDiv.classList.add('nextResetDiv');
  nextResetDiv.appendChild(resetButton);
  if(window.innerWidth <= 600 || window.location.pathname == '/singleWorkout.html'){nextResetDiv.appendChild(backButton)}


  // Create exercise card element and its components
  var exerciseCard = document.createElement('div');
  exerciseCard.classList.add('exerciseCard');

  if (window.innerWidth <= 600 && window.location.pathname == '/setWorkout.html') {
    const closeButton = createCloseButton();
    exerciseCard.appendChild(closeButton);
  }
  exerciseCard.appendChild(imgContainer);
  exerciseCard.appendChild(titleH);
  exerciseCard.appendChild(targetDiv);
  exerciseCard.appendChild(startButton);

  return exerciseCard;
}

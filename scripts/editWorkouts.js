import { createSmallWorkoutCard } from "./smallWorkoutCard.js";
import { createWorkoutSetCard } from "./workoutSetCard.js";

const singleWorkoutTabButton = document.getElementById('single-workout-tab-button')
const setWorkoutTabButton = document.getElementById('set-workout-tab-button')
const singleWorkoutTabContent = document.getElementById('single-workout-tab-content')
const setWorkoutTabContent = document.getElementById('set-workout-tab-content')

singleWorkoutTabButton.classList.add('active')
setWorkoutTabContent.classList.add('hidden')

const workoutData = [
    ['resources/benchPress.gif', 'Bench Press', 4, 12],
    ['resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12],
    ['resources/chestPress.gif', 'Chest Press', 4, 12],
    ['resources/shoulderPress.gif', 'Shoulder Press', 4, 12],
    ['resources/lateralRaise.gif', 'Lateral Raise', 4, 12],
    ['resources/tricepsPushdown.gif', 'Triceps Rope Pushdown', 4, 12],
    ['resources/barbellTriceps.gif', 'Triceps Barbell', 4, 12],
    ['resources/benchPress.gif', 'Bench Press', 4, 12],
    ['resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12],
    ['resources/chestPress.gif', 'Chest Press', 4, 12],
    ['resources/shoulderPress.gif', 'Shoulder Press', 4, 12],
    ['resources/lateralRaise.gif', 'Lateral Raise', 4, 12],
    ['resources/tricepsPushdown.gif', 'Triceps Rope Pushdown', 4, 12],
    ['resources/barbellTriceps.gif', 'Triceps Barbell', 4, 12],
  ];

const workoutSetData = [
    ['resources/exerciseIcon.png', 'Upper Body', 'Chest/ Biceps'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Incline Dumbbell Press'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Chest Press'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Shoulder Press'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Lateral Raise'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Triceps Rope Pushdown'],
    ['resources/exerciseIcon.png', 'Upper Body', 'Triceps Barbell'],
    ];

function appendWorkoutsToContainer(containerId, cardFunction, data) {
    const container = document.getElementById(containerId);

    data.forEach(workout => {
        const [imageSrc, workoutName, numberOfSets, numberOfReps] = workout;
        const card = cardFunction(imageSrc, workoutName, numberOfSets, numberOfReps);
        container.appendChild(card);
    });
}

appendWorkoutsToContainer('user-created-workouts-container', createSmallWorkoutCard, workoutData);
// appendWorkoutsToContainer('single-workout-user-created-container', createSmallWorkoutCard, workoutData);
// appendWorkoutsToContainer('single-workout-library-container', createSmallWorkoutCard, workoutData);

appendWorkoutsToContainer('user-created-set-workouts-container', createWorkoutSetCard, workoutSetData);
// appendWorkoutsToContainer('set-workout-user-created-container', createWorkoutSetCard, workoutSetData);
// appendWorkoutsToContainer('set-workout-library-container', createWorkoutSetCard, workoutSetData);


singleWorkoutTabButton.addEventListener('click', function(event){
    event.target.classList.add('active')
    setWorkoutTabButton.classList.remove('active')
    singleWorkoutTabContent.classList.remove('hidden')
    setWorkoutTabContent.classList.add('hidden')

    setTimeout(() => {
        singleWorkoutTabContent.style.opacity = '1';
        // singleWorkoutTabContent.style.transform = 'translateY(0)';
        setWorkoutTabContent.style.opacity = '0';
        // setWorkoutTabContent.style.transform = 'translateY(20px)';
      }, 100);

})

setWorkoutTabButton.addEventListener('click', function(event){
    event.target.classList.add('active')
    singleWorkoutTabButton.classList.remove('active')
    setWorkoutTabContent.classList.remove('hidden')
    singleWorkoutTabContent.classList.add('hidden')

    setTimeout(() => {
        singleWorkoutTabContent.style.opacity = '0';
        // singleWorkoutTabContent.style.transform = 'translateY(20px)';
        setWorkoutTabContent.style.opacity = '1';
        // setWorkoutTabContent.style.transform = 'translateY(0)';
      }, 100);

})
import { createSmallWorkoutCard } from "../scripts/smallWorkoutCard.js";
import { createWorkoutSetCard } from "../scripts/workoutSetCard.js";
import { smallScreenWidth } from './index.js';

const singleWorkoutDiv = document.getElementById('single-workouts-div'); // Replace with the actual container element

const workoutData = [
  ['resources/benchPress.gif', 'Bench Press', 4, 12],
  ['resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12],
  ['resources/chestPress.gif', 'Chest Press', 4, 12],
  ['resources/shoulderPress.gif', 'Shoulder Press', 4, 12],
  ['resources/lateralRaise.gif', 'Lateral Raise', 4, 12],
  ['resources/tricepsPushdown.gif', 'Triceps Rope Pushdown', 4, 12],
  ['resources/barbellTriceps.gif', 'Triceps Barbell', 4, 12],

  ['resources/latPulldown.gif', 'Lats Pulldown', 4, 12],
  ['resources/seatedCableRow.gif', 'Cable Row', 4, 12],
  ['resources/machinePullover.gif', 'Machine Pullover', 4, 12],
  ['resources/barPreacher.gif', 'Bar Preacher', 4, 12],
  ['resources/cableHammerCurls.gif', 'Cable Hammer Curl', 4, 12],
  ['resources/seatdRowing.gif', 'Seatd Rowing', 4, 12],

  ['resources/legPress.gif', 'Leg Press', 4, 12],
  ['resources/legCurl.gif', 'Leg Curl', 4, 12],
  ['resources/legExtension.gif', 'Leg Extension', 4, 12],
  ['resources/calfPress.gif', 'Calf Press', 4, 12],
  ['resources/hipThrust.gif', 'Hip Thrust', 4, 12],
  ['resources/cableTwist.gif', 'Cable Twist', 4, 12],
  ['resources/declineSetup.gif', 'Decline Set-up', 4, 12],
];

workoutData.forEach(workout => {
  const [imageSrc, workoutName, numberOfSets, numberOfReps] = workout;
  const card = createSmallWorkoutCard(imageSrc, workoutName, numberOfSets, numberOfReps);
  singleWorkoutDiv.appendChild(card);
});

const workoutSetDiv = document.getElementById('set-workouts-div'); // Replace with the actual container element

const workoutSetData = [
  ['resources/exerciseIcon.png', 'Upper Body', 'Chest/ Biceps'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Incline Dumbbell Press'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Chest Press'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Shoulder Press'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Lateral Raise'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Triceps Rope Pushdown'],
  ['resources/exerciseIcon.png', 'Upper Body', 'Triceps Barbell'],
];

workoutSetData.forEach(set => {
  const [imageSrc, bodyTarget, muscleTarget] = set;
  const card = createWorkoutSetCard(imageSrc, bodyTarget, muscleTarget);
  workoutSetDiv.appendChild(card);
});

const screenWidth = window.innerWidth;
if(screenWidth<smallScreenWidth){
    document.getElementById('single-workouts-div-main').classList.add('collapsed')
    document.getElementById('set-workouts-div-main').classList.add('collapsed')
    document.getElementById('set-workouts-div-header').classList.add('collapsed')
    document.getElementById('single-workouts-div-header').classList.add('collapsed')

}

document.getElementById('single-workouts-div-header').addEventListener('click', function(event){
    event.target.classList.toggle('collapsed')
    document.getElementById('single-workouts-div-main').classList.toggle('collapsed')
    document.getElementById('set-workouts-div-main').classList.add('collapsed')
    document.getElementById('set-workouts-div-header').classList.add('collapsed')

})

document.getElementById('set-workouts-div-header').addEventListener('click', function(event){
    event.target.classList.toggle('collapsed')
    document.getElementById('set-workouts-div-main').classList.toggle('collapsed')
    document.getElementById('single-workouts-div-main').classList.add('collapsed')
    document.getElementById('single-workouts-div-header').classList.add('collapsed')
})
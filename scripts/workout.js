import { createSmallWorkoutCard } from "./smallWorkoutCard.js";
import { createWorkoutSetCard } from "./workoutSetCard.js";

const singleWorkoutDiv = document.getElementById('single-workouts-div'); // Replace with the actual container element
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/benchPress.gif', 'Bench Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/chestPress.gif', 'Chest Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/shoulderPress.gif', 'Shoulder Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/lateralRaise.gif', 'Lateral Raise', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/tricepsPushdown.gif', 'Triceps Rope Pushdown', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/barbellTriceps.gif', 'Triceps Barbell', 4, 12));

singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/latPulldown.gif', 'Lats Pulldown', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/seatedCableRow.gif', 'Cable Row', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/machinePullover.gif', 'Machine Pullover', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/barPreacher.gif', 'Bar Preacher', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/cableHammerCurls.gif', 'Cable Hammer Curl', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/seatdRowing.gif', 'Seatd Rowing', 4, 12));

singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/legPress.gif', 'Leg Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/legCurl.gif', 'Leg Curl', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/legExtension.gif', 'Leg Extension', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/calfPress.gif', 'Calf Press', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/hipThrust.gif', 'Hip Thrust', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/cableTwist.gif', 'Cable Twist', 4, 12));
singleWorkoutDiv.appendChild(createSmallWorkoutCard('resources/declineSetup.gif', 'Decline Set-up', 4, 12));

const workoutSetDiv = document.getElementById('set-workouts-div');

workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Chest/ Biceps'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Incline Dumbbell Press'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Chest Press'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Shoulder Press'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Lateral Raise'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Triceps Rope Pushdown'));
workoutSetDiv.appendChild(createWorkoutSetCard('resources/exerciseIcon.png', 'Upper Body', 'Triceps Barbell'));

const screenWidth = window.innerWidth;
if(screenWidth<600){
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
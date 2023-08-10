import { ExerciseCard } from "./exerciseCard.js";
import { createSmallWorkoutCard } from "./smallWorkoutCard.js";

const queryParams = new URLSearchParams(window.location.search);
const parameter1 = queryParams.get('numberOfReps');

const smallWorkoutCardsContainer = document.getElementById('small-workout-cards-container');

smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/benchPress.gif', 'Bench Press', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/chestPress.gif', 'Chest Press', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/shoulderPress.gif', 'Shoulder Press', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/lateralRaise.gif', 'Lateral Raise', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/tricepsPushdown.gif', 'Triceps Rope Pushdown', 4, 12));
smallWorkoutCardsContainer.appendChild(createSmallWorkoutCard('resources/barbellTriceps.gif', 'Triceps Barbell', 4, 12));

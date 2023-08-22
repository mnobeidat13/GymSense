import { createSmallWorkoutCard } from "./smallWorkoutCard.js";
import { createWorkoutSetCard } from "./workoutSetCard.js";

//Buttons Queries
const singleWorkoutTabButton = document.getElementById('single-workout-tab-button')
const setWorkoutTabButton = document.getElementById('set-workout-tab-button')
const newWorkoutSetButton = document.getElementById('create-new-workout-set-button')
const newWorkoutButton = document.getElementById('create-new-workout-button')
const addImageButton = document.getElementById('add-image-button')
const closeButton = document.getElementById('new_workout-div-close-button')
const closeButtonSet = document.getElementById('new_workout-set-div-close-button')

//Divs Queries
const singleWorkoutTabContent = document.getElementById('single-workout-tab-content')
const setWorkoutTabContent = document.getElementById('set-workout-tab-content')
const newWorkoutDiv = document.getElementById('create-new-workout-div')
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const newWorkoutForm = document.getElementById('new-workout-form')
const newWorkoutSetForm = document.getElementById('new-workout-set-form')
const userCreatedWorkoutsContainer = document.getElementById('user-created-workouts-container')
const userCreatedWorkoutSetContainer = document.getElementById('user-created-workouts-set-container')
const newWorkoutSetDiv = document.getElementById('create-new-workout-set-div')

//Toggling Tabs and Divs
singleWorkoutTabButton.classList.add('active')
// setWorkoutTabButton.classList.add('active')
setWorkoutTabContent.classList.add('hidden')
// singleWorkoutTabContent.classList.add('hidden')
newWorkoutDiv.classList.add('hidden')
newWorkoutSetDiv.classList.add('hidden')


//Data Samples
const workoutData = [
    ['resources/benchPress.gif', 'Bench Press', 4, 12],
    ['resources/inclineDumbbellPress.gif', 'Incline Dumbbell Press', 4, 12]]

const workoutSetData = [
    ['resources/exerciseIcon.png', 'Upper Body', 'Chest/ Biceps'],
    ['resources/exerciseIcon.png', 'Lower Body', 'Legs']]

workoutData.forEach(workout => {
    const [imageSrc, workoutName, numberOfSets, numberOfReps] = workout;
    var card = createSmallWorkoutCard(imageSrc, workoutName, numberOfSets, numberOfReps);
    userCreatedWorkoutsContainer.appendChild(card);
});

workoutSetData.forEach(workout => {
    const [imageSrc, bodyTarget, muscleTarget] = workout;
    var card = createWorkoutSetCard(imageSrc, bodyTarget, muscleTarget);
    userCreatedWorkoutSetContainer.appendChild(card);
});


//Attaching Event Listners
singleWorkoutTabButton.addEventListener('click', function(event){
    event.target.classList.add('active')
    setWorkoutTabButton.classList.remove('active')
    singleWorkoutTabContent.classList.remove('hidden')
    setWorkoutTabContent.classList.add('hidden')
})

setWorkoutTabButton.addEventListener('click', function(event){
    event.target.classList.add('active')
    singleWorkoutTabButton.classList.remove('active')
    setWorkoutTabContent.classList.remove('hidden')
    singleWorkoutTabContent.classList.add('hidden')
})

newWorkoutButton.addEventListener('click', ()=>{
    newWorkoutDiv.classList.remove('hidden')
    imagePreview.style.display = 'none';
})

closeButton.addEventListener('click', ()=>{
    newWorkoutDiv.classList.add('hidden')
})

newWorkoutSetButton.addEventListener('click', ()=>{
    newWorkoutSetDiv.classList.remove('hidden')
})

closeButtonSet.addEventListener('click', ()=>{
    newWorkoutSetDiv.classList.add('hidden')
})

addImageButton.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {

    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = URL.createObjectURL(selectedFile)
            imagePreview.style.display = 'block'};
        reader.readAsDataURL(selectedFile);}
});

newWorkoutForm.addEventListener('submit', function(e){
    e.preventDefault()
    var inputs = this.querySelectorAll("input");
    var inputData = {};
    inputs.forEach(function(input) {
        if (input.type == 'text' || input.type == 'number' ) {
            inputData[input.name] = input.value}})

    inputData['imgSrc'] = imagePreview

    const newWorkoutCard = createSmallWorkoutCard(imagePreview.src, inputData['workoutName'], inputData['numberOfSets'], inputData['numberOfReps'])
    userCreatedWorkoutsContainer.appendChild(newWorkoutCard)
    newWorkoutDiv.classList.add('hidden')
})

newWorkoutSetForm.addEventListener('submit', function(e){

    e.preventDefault()
    var inputs = this.querySelectorAll("input");
    var inputData = {};
    inputs.forEach(function(input) {
        if (input.type == 'text' || input.type == 'number' ) {
            inputData[input.name] = input.value}});

    const newWorkoutSetCard = createWorkoutSetCard(inputData['bodyTarget'], inputData['muscleTarget'], inputData['numberOfReps'])
    userCreatedWorkoutSetContainer.appendChild(newWorkoutSetCard)
    newWorkoutSetDiv.classList.add('hidden')
})

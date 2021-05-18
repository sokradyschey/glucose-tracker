// Creating a new entry 
let trackingValue = document.querySelector('#trackingValue');
let displayLevels = document.querySelector('#levels');
// let displayTime = document.querySelector('#time');
// let displayMeal = document.querySelector('#meal');
let trackingList = document.querySelector('#trackingList');

trackingValue.addEventListener('submit', function(e) {
    // Don't submit the form
    e.preventDefault();

    // Ignore if form is empty
    if (displayLevels.value.length < 1) return;
    // if (displayTime.value.length < 1) return;
    // if (displayMeal.value.length < 1) return;

    // Add Blood Sugar Values
    trackingList.innerHTML += displayLevels.value + ' ' + 'mg/dL';
    // '<li>' + displayTime.value + '</li>' + 
    // '<li>' + displayMeal.value + '</li>';

    // Clear Inputs
    displayLevels.value = '';
    // displayTime.value = '';
    // displayMeal.value = '';

    // Save Values to Local Storage
    localStorage.setItem('displayLevels', trackingList.innerHTML);

}, false);

// Check for Saved Blood Sugar Values
const savedValues = localStorage.getItem('displayLevels');

// If there are any saved items, update our list
// if (savedValues) {
// 	trackingList.innerHTML = savedValues;
// }

// Clear Form
function clearForm() {
    document.getElementById('levels').value = '';
    // document.getElementById('time').value = '';
    // document.getElementById('meal').value = '';
}

// Creating an array from form data
var levels = [];
var total = 0;

function submitLevels() {
    sugarLevels = document.getElementById('levels').value;
    levels.push(sugarLevels);
    console.log(levels);

    // Calculating the average
    for (var i = 0; i < levels.length; i++) {
        total += levels[i];
    }
    var avg = total / levels.length;
    console.log(avg);
}


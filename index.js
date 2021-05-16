// Creating a new entry 
// function newEntry() {
//     document.getElementById('displayLevels').innerHTML = 
//     document.getElementById('levels').value;

//     document.getElementById('displayTime').innerHTML = 
//     document.getElementById('time').value;

//     document.getElementById('displayMeal').innerHTML = 
//     document.getElementById('meal').value;

//     document.getElementById('displayNotes').innerHTML = 
//     document.getElementById('notes').value;
// }

let trackingValue = document.querySelector('#trackingValue');
let displayLevels = document.querySelector('#levels');
let displayTime = document.querySelector('#time');
let displayMeal = document.querySelector('#meal');
let trackingList = document.querySelector('#trackingList');

trackingValue.addEventListener('submit', function(e) {
    // Don't submit the form
    e.preventDefault();

    // Ignore if form is empty
    if (displayLevels.value.length < 1) return;
    if (displayTime.value.length < 1) return;
    if (displayMeal.value.length < 1) return;

    // Add Blood Sugar Values
    trackingList.innerHTML += 
    '<li>' + displayLevels.value + '</li>' + 
    '<li>' + displayTime.value + '</li>' + 
    '<li>' + displayMeal.value + '</li>';

    // Clear Inputs
    displayLevels.value = '';
    displayTime.value = '';
    displayMeal.value = '';

    // Save Values to Local Storage
    localStorage.setItem('displayLevels', trackingList.innerHTML);

}, false);

// Check for Saved Blood Sugar Values
const savedValues = localStorage.getItem('displayLevels');

// If there are any saved items, update our list
if (savedValues) {
	trackingList.innerHTML = savedValues;
}

// Clear Form
function clearForm() {
    document.getElementById('levels').value = '';
    document.getElementById('time').value = '';
    document.getElementById('meal').value = '';
}
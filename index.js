// Creating a new entry 
let trackingValue = document.querySelector('#trackingValue');
let displayLevels = document.querySelector('#levels');
let trackingList = document.querySelector('#trackingList');

trackingValue.addEventListener('submit', function(e) {
    // Don't submit the form
    e.preventDefault();

    // Ignore if form is empty
    if (displayLevels.value.length < 1) return;

    // Add Blood Sugar Values
    trackingList.innerHTML += displayLevels.value + ' ' + 'mg/dL' + '<br>';

    // Clear Inputs
    displayLevels.value = '';

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
}

// Creating an array from form data
let levels = [];

function submitLevels() {
    let total = 0;
    sugarLevels = document.getElementById('levels').value;
    levels.push(sugarLevels);

    // Calculating the average
    for (let i = 0; i < levels.length; i++) {
        total += parseInt(levels[i]);
    }

    let avg = total / levels.length;

    document.getElementById('dailyAvg').innerHTML = avg;
    
    console.log(`the total is ${total}`);
    console.log(`the average is ${avg}`);
}
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
    trackingList.innerHTML += (`${displayLevels.value} mg/dL` + '<br>');

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
    document.getElementById('dailyAvg').innerHTML = (`${avg} mg/dL`);

    // If Fasting Levels are less than 70 or greater than 89 change to Red and alert user
    let postMeal = document.querySelector('.postMeal');
    let fasting = document.querySelector('#dailyFasting');
    
    if ((sugarLevels <= 70) || (sugarLevels >= 89)) {
        fasting.style.color = 'red';  
    } else (fasting.style.color = 'green'); 

    // If Post Meal Levels are less than 70 or greater than 129 change to Red and alert user
    if ((sugarLevels <= 70) || (sugarLevels >= 129)) {
        postMeal.style.color = 'red'; 
    } else (postMeal.style.color.style.color = 'green');

    // Meal Type to display according to Daily Summary
    if (document.getElementById('meal').value == document.getElementById('fastingValue').value) {
        fasting.innerHTML = (`${sugarLevels} mg/dL`);
    } else if (document.getElementById('meal').value == document.getElementById('postBreakfast').value) {
        document.getElementById('dailyBreakfast').innerHTML = (`${sugarLevels} mg/dL`);
    } else if (document.getElementById('meal').value == document.getElementById('postLunch').value) {
        document.getElementById('dailyLunch').innerHTML = (`${sugarLevels} mg/dL`);
    } else if (document.getElementById('meal').value == document.getElementById('postDinner').value) {
        document.getElementById('dailyDinner').innerHTML = (`${sugarLevels} mg/dL`);
    } else { document.getElementById('dailyAvg').innerHTML = (`${avg} mg/dL`); };


    console.log(`the total is ${total}`);
    console.log(`the average is ${avg}`);
}

// Change the color accordingly if range is above or below limits 

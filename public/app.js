// Creating an array from form data
let levels = [];
// Declaring variables based on combinations of meal types
let mealType = document.querySelector('#meal');
let fasting = document.querySelector('#dailyFasting');
let breakfast = document.querySelector('#dailyBreakfast');
let lunch = document.querySelector('#dailyLunch');
let dinner = document.querySelector('#dailyDinner');

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

    // If levels are in range change to green. If out of range change to red.
    if (mealType.value == document.getElementById('fastingValue').value && (sugarLevels <= 70 || sugarLevels >= 89)) {
        fasting.innerHTML = (`${sugarLevels} mg/dL`);
        fasting.style.color = 'red';
    } else if (mealType.value == document.getElementById('fastingValue').value && (sugarLevels > 70 || sugarLevels < 89)) {
        fasting.innerHTML = (`${sugarLevels} mg/dL`);
        fasting.style.color = 'green';
    } else if (mealType.value == document.getElementById('postBreakfast').value && (sugarLevels <= 70 || sugarLevels >= 129)) {
        breakfast.innerHTML = (`${sugarLevels} mg/dL`);
        breakfast.style.color = 'red';
    } else if (mealType.value == document.getElementById('postBreakfast').value && (sugarLevels > 70 || sugarLevels < 129)) {
        breakfast.innerHTML = (`${sugarLevels} mg/dL`);
        breakfast.style.color = 'green'; 
    } else if (mealType.value == document.getElementById('postLunch').value && (sugarLevels <= 70 || sugarLevels >= 129)) {
        lunch.innerHTML = (`${sugarLevels} mg/dL`);
        lunch.style.color = 'red';
    } else if (mealType.value == document.getElementById('postLunch').value && (sugarLevels > 70 || sugarLevels < 129)) {
        lunch.innerHTML = (`${sugarLevels} mg/dL`);
        lunch.style.color = 'green';
    } else if (mealType.value == document.getElementById('postDinner').value && (sugarLevels <= 70 || sugarLevels >= 129)) {
        dinner.innerHTML = (`${sugarLevels} mg/dL`);
        dinner.style.color = 'red';
    } else if (mealType.value == document.getElementById('postDinner').value && (sugarLevels > 70 || sugarLevels < 129)) {
        dinner.innerHTML = (`${sugarLevels} mg/dL`);
        dinner.style.color = 'green';
    } else {return false};
}

// Clear Form
function clearForm() {
    document.getElementById('levels').value = '';
}

// Creating a new entry 
let trackingValue = document.querySelector('#trackingValue');
let displayLevels = document.querySelector('#levels');
let trackingList = document.querySelector('#trackingList');


trackingValue.addEventListener('submit', function(e) {
    // Don't submit the form
    e.preventDefault();

    // Ignore if form is empty
    if (displayLevels.value.length < 1) return;

    // Add Form Values
    if (mealType.value == document.getElementById("fastingValue").value) {
        trackingList.innerHTML += (`${mealType.value}: ${displayLevels.value} mg/dL` + '<br>');
    } else if (mealType.value == document.getElementById("postBreakfast").value) {
        trackingList.innerHTML += (`${mealType.value}: ${displayLevels.value} mg/dL` + '<br>');
    } else if (mealType.value == document.getElementById("postLunch").value) {
        trackingList.innerHTML += (`${mealType.value}: ${displayLevels.value} mg/dL` + '<br>');
    } else if (mealType.value == document.getElementById("postDinner").value) {
        trackingList.innerHTML += (`${mealType.value}: ${displayLevels.value} mg/dL` + '<br>');
    } else {return false};

    // Clear Inputs
    displayLevels.value = '';

}, false);

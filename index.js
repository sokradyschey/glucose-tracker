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
    e.preventDefault();

    if (displayLevels.value.length < 1) return;
    if (displayTime.value.length < 1) return;
    if (displayMeal.value.length < 1) return;

    trackingList.innerHTML += 
    '<li>' + displayLevels.value + '</li>' + 
    '<li>' + displayTime.value + '</li>' + 
    '<li>' + displayMeal.value + '</li>';

    displayLevels.value = '';
    displayTime.value = '';
    displayMeal.value = '';

    localStorage.setItem('displayLevels', trackingList.innerHTML);


}, false);

// Clear Entry
function cancelEntry() {
    document.getElementById('levels').value = '';
    document.getElementById('time').value = '';
    document.getElementById('meal').value = '';
}
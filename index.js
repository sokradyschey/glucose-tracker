// Creating a new entry 
function newEntry() {
    document.getElementById('displayLevels').innerHTML = 
    document.getElementById('levels').value;

    document.getElementById('displayTime').innerHTML = 
    document.getElementById('time').value;

    document.getElementById('displayMeal').innerHTML = 
    document.getElementById('meal').value;

    document.getElementById('displayNotes').innerHTML = 
    document.getElementById('notes').value;
}

// Clear Entry
function cancelEntry() {
    document.getElementById('levels').value = '';
    document.getElementById('time').value = '';
    document.getElementById('meal').value = '';
    document.getElementById('notes').value = '';
}
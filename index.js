// Creating a new entry 
function newEntry() {
    let li = document.createElement("li");
    let entryValue = document.getElementById("bglevel").value;
    let text = document.createTextNode(entryValue);
    li.appendChild(text);
    if (entryValue === '') {
        alert("Add your BG Levels");
    } else {
        document.getElementById("entryList").appendChild(li);
    }
    document.getElementById("entryValue").value = "";
}

// Clear Entry
function cancelEntry() {
    document.getElementById('bglevel').value = ''
}
let array = [];

function createArrayInputs() {
    const arrayLength = parseInt(document.getElementById("arrayLength").value);
    const arrayInputsDiv = document.getElementById("arrayInputs");
    arrayInputsDiv.innerHTML = '';

    for (let i = 0; i < arrayLength; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `arrayElement${i}`;
        input.placeholder = `Enter value ${i + 1}`;
        arrayInputsDiv.appendChild(input);
        arrayInputsDiv.appendChild(document.createElement('br'));
    }
}

function performOperations() {
    const arrayLength = parseInt(document.getElementById("arrayLength").value);
    const deleteElements = document.getElementById("deleteElement").value.split(',').map(e => e.trim());
    const checkElement = document.getElementById("checkElement").value;

    array = [];
    for (let i = 0; i < arrayLength; i++) {
        let value = document.getElementById(`arrayElement${i}`).value;
        array.push(value);
    }

    document.getElementById("originalArray").innerText = "Original Array: " + array.join(", ");

    let modifiedArray = array.filter(item => !deleteElements.includes(item));

    if (modifiedArray.length === array.length) {
        alert(`Elements ${deleteElements.join(', ')} not found in array.`);
    }

    array = modifiedArray;
    document.getElementById("modifiedArray").innerText = "Array after Deletion: " + array.join(", ");

    let contains = array.includes(checkElement);
    document.getElementById("checkResult").innerText = "Contains " + checkElement + ": " + contains;
}

function emptyArray() {
    array = [];
    document.getElementById("arrayStatus").innerText = "Array is now empty.";
    document.getElementById("originalArray").innerText = "";
    document.getElementById("modifiedArray").innerText = "";
    document.getElementById("checkResult").innerText = "";
    document.getElementById("arrayInputs").innerHTML = "";
    document.getElementById("arrayLength").value = "";
}

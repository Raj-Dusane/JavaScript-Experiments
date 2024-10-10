// Initialize an empty array
let array = [];
let arraySize = 0;

// Step 2: Function to initialize the array with user-specified size
function initializeArray() {
    arraySize = parseInt(document.getElementById("arraySize").value);
    array = new Array(arraySize);  // Creating the array with the specified size
    document.getElementById("output").innerHTML = `Initialized array of size ${arraySize}: [${array}]`;
}

// Step 3: Function to append an object/array to the array using push()
function appendObject() {
    const inputElement = document.getElementById('elementInput').value.trim();
    let parsedElement;

    // Attempt to parse input as JSON (array or object)
    try {
        parsedElement = JSON.parse(inputElement);
    } catch (error) {
        parsedElement = inputElement; // If parsing fails, treat it as a string
    }

    // Append the object to the array using push()
    array.push(parsedElement);

    // Step 4: Check if the appended object is an array using isArray()
    const isArrayCheck = Array.isArray(parsedElement);

    // Display results
    let result = `Array after appending: [${array.map(el => JSON.stringify(el)).join(', ')}] <br>`;
    result += `Is the last appended element an array? ${isArrayCheck ? 'Yes' : 'No'}`;
    
    document.getElementById("output").innerHTML = result;
}

// Additional Array Methods

// Pop: Removes the last element of the array
function popElement() {
    const poppedElement = array.pop();
    let result = `Popped element: ${JSON.stringify(poppedElement)} <br>`;
    result += `Array after popping: [${array.map(el => JSON.stringify(el)).join(', ')}]`;
    
    document.getElementById("output").innerHTML = result;
}

// Shift: Removes the first element of the array
function shiftElement() {
    const shiftedElement = array.shift();
    let result = `Shifted element: ${JSON.stringify(shiftedElement)} <br>`;
    result += `Array after shifting: [${array.map(el => JSON.stringify(el)).join(', ')}]`;
    
    document.getElementById("output").innerHTML = result;
}

// Unshift: Adds an element to the beginning of the array
function unshiftElement() {
    const inputElement = document.getElementById('elementInput').value.trim();
    let parsedElement;

    // Attempt to parse input as JSON (array or object)
    try {
        parsedElement = JSON.parse(inputElement);
    } catch (error) {
        parsedElement = inputElement; // If parsing fails, treat it as a string
    }

    array.unshift(parsedElement); // Adds the element to the beginning of the array

    let result = `Array after unshifting: [${array.map(el => JSON.stringify(el)).join(', ')}]`;
    
    document.getElementById("output").innerHTML = result;
}

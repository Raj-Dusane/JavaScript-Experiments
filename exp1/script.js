// Function to calculate the area of a triangle using semiperimeter formula
function calculateTriangle() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        document.getElementById('triangleResult').innerText = "Please enter valid side lengths.";
        return;
    }

    const s = (a + b + c) / 2; // Semiperimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Area calculation
    document.getElementById('triangleResult').innerText = `Area of Triangle: ${area.toFixed(2)}`;
}

// Function to calculate the area of a rectangle
function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('rectangleResult').innerText = "Please enter valid dimensions.";
        return;
    }

    const area = length * width;
    document.getElementById('rectangleResult').innerText = `Area of Rectangle: ${area}`;
}

// Function to calculate the area of a circle
function calculateCircle() {
    const radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circleResult').innerText = "Please enter a valid radius.";
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circleResult').innerText = `Area of Circle: ${area.toFixed(2)}`;
}
  
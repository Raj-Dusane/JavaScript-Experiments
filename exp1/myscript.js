function calculate(id) {
    if (id===1) {
        let base = document.getElementById("base");
        let height = document.getElementById("height");

        if (base.value==="") alert("Enter Base");
        if (height.value==="") alert("Enter Height");

        let result = 0.5 * parseFloat(base.value) * parseFloat(height.value);
        document.getElementById("triangleResult").innerHTML = result.toFixed(4);
    }

    if (id===2) {   
        let width = document.getElementById("width");
        let length = document.getElementById("length");

        if (width.value==="") alert("Enter Width");
        if (length.value==="") alert("Enter Length");

        let result = parseFloat(width.value) * parseFloat(length.value);
        document.getElementById("rectangleResult").innerHTML = result.toFixed(4);
    }

    if (id===3) {   
        let radius = document.getElementById("radius");

        if (radius.value==="") alert("Enter radius");

        let result = Math.PI * Math.pow(parseFloat(radius.value), 2);
        document.getElementById("circleResult").innerHTML = result.toFixed(4);
    }
}
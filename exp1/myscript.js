function calculate(id) {
    
    function checkInput(inputValue) {
        return inputValue.toLowerCase().indexOf('o') !== -1;
    }

    if (id===1) {
        let base = document.getElementById("base");
        let height = document.getElementById("height");

        if (base.value==="") { alert("Enter Base"); return; }
        if (height.value==="") { alert("Enter Height"); return; } 
        if (checkInput(base.value)) {
            alert("Entered 'o' in base");
            return;
        }
        if (checkInput(height.value)) {
            alert("Entered 'o' in height");
            return;
        }

        let result = 0.5 * parseFloat(base.value) * parseFloat(height.value);
        document.getElementById("triangleResult").innerHTML = result.toFixed(4);
    }

    if (id===2) {   
        let width = document.getElementById("width");
        let length = document.getElementById("length");

        if (width.value==="") { alert("Enter Width"); return; }
        if (length.value==="") { alert("Enter Length"); return; }
        if (checkInput(width.value)) {
            alert("Entered 'o' in width");
            return;
        }
        if (checkInput(length.value)) {
            alert("Entered 'o' in length");
            return;
        }

        let result = parseFloat(width.value) * parseFloat(length.value);
        document.getElementById("rectangleResult").innerHTML = result.toFixed(4);
    }

    if (id===3) {   
        let radius = document.getElementById("radius");

        if (radius.value==="") { alert("Enter radius"); return; }
        if (checkInput(radius.value)) {
            alert("Entered 'o' in radius");
            return;
        }

        let result = Math.PI * Math.pow(parseFloat(radius.value), 2);
        document.getElementById("circleResult").innerHTML = result.toFixed(4);
    }

}
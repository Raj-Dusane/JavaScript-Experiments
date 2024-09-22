function compareStrings() {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;

    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    let result3 = document.getElementById('result3');

    // Strict Equality Operator compare
    if (string1 === string2) {
        result1.innerHTML = `<h2> <strong> Output </strong> </h2>
                            <p><strong>Strict equality:</strong> Strings are exactly similar.</p>
                            `;
    } else {
        result1.innerHTML = `<p><strong>Strict equality:</strong> Strings are dissimilar.</p>`;
    }

    // Custom compare
    if (string1.length != string2.length) {
        result2.innerHTML = `<p><strong>Custom compare: </strong> length is dissimilar.</p>`;
        if (string1.length < string2.length) {
            result2.innerHTML += `<strong> ${string2} </strong> length is longer than <strong> ${string1} </strong> length.</p>`;
        } else {
            result2.innerHTML += `<strong> ${string1} </strong> length is longer than <strong> ${string2} </strong> length.</p>`;
        }
    }
    else { 
        if (string1==string2){
            result2.innerHTML = `<p><strong>Comparison by length:</strong> Both strings have equal length and are similar.</p>`;
        }
        else result2.innerHTML = `<p><strong>Comparison by length:</strong> Both strings have equal length and are similar.</p>`;
    }

    // Compare using localeCompare() method
    const localeComparison = string1.localeCompare(string2);

    if (localeComparison === 0) {
        result3.innerHTML = `<p><strong>Comparison using localeCompare():</strong> The strings are alphabetically identical </p>`;
    } else if (localeComparison < 0) {
        result3.innerHTML = `<p><strong>Comparison using localeCompare(): ${string1} </strong> comes before <strong> ${string2} </strong> alphabetically </p>`;
    } else {
        result3.innerHTML = `<p><strong>Comparison using localeCompare(): ${string1} </strong> comes after <strong> ${string2} </strong> alphabetically </p>`;
    }
}
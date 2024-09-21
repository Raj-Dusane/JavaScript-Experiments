function generateTable() {
    const number = parseInt(document.getElementById('number').value);
    let table = '';

    if (isNaN(number)) {
        document.getElementById('tableResult').innerText = "Please enter a valid number.";
        return;
    }

    table += '<ul>';
    for (let i = 1; i <= 10; i++) {
        table += `<li>${number} x ${i} = ${number * i}</li>`;
    }
    table += '</ul>';

    let output = `
                <br>
                <h3>Multiplication Table for ${number} <\h3>
                ${table} 
                `
    document.getElementById('tableResult').innerHTML = output;
}
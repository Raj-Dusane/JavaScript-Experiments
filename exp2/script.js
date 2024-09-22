function generateTable() {
    const number = parseInt(document.getElementById('number').value);
    const multiplier = parseInt(document.getElementById('multiplier').value);
    let forTable = '';
    let doWhileTable = '';
    let whileTable  = '';
    
    if (isNaN(number)) {
        document.getElementById('tableResult').innerText = "Please enter a valid number.";
        return;
    }

    forTable += '<ul>';
    for (let i = 1; i <= multiplier; i++) {
        forTable += `<li>${number} x ${i} = ${number * i}</li>`;
    }
    forTable += '</ul>';
    
    doWhileTable += '<ul>';
    let i=1;
    do {
        doWhileTable += `<li>${number} x ${i} = ${number * i}</li>`;
        i++;
    }
    while (i<=multiplier);
    doWhileTable += '</ul>';

    whileTable += '<ul>';
    i=1;
    while (i <= multiplier) {
        whileTable += `<li>${number} x ${i} = ${number * i}</li>`;
        i++;
    }
    whileTable += '</ul>';
    
    let forLoopOutput = `
        <h5> Using For loop </h5>
        ${forTable} 
    `
    let doWhileLoopOutput = `
        <h5> Using Do While loop </h5>
        ${whileTable} 
    `
    let whileLoopOutput = `
        <h5> Using While loop </h5>
        ${doWhileTable} 
    `
    document.getElementById('heading').innerHTML = `<h3> Multiplication Table for ${number} <\h3>`;

    document.getElementById('forLoop').innerHTML = forLoopOutput;
    document.getElementById('doWhileLoop').innerHTML = doWhileLoopOutput;
    document.getElementById('whileLoop').innerHTML = whileLoopOutput;
}
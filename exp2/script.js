function redirectTo(method) {
    const number = parseInt(document.getElementById('number').value);
    const multiplier = parseInt(document.getElementById('multiplier').value);

    if (isNaN(number) || isNaN(multiplier)) {
        alert("Please enter a valid numbers.");
        return;
    }

    localStorage.setItem('number', number);
    localStorage.setItem('multiplier', multiplier);

    if (method === 'for') {
        window.open('for.html', '_blank');
    } else if (method === 'while') {
        window.open('while.html', '_blank');
    } else if (method === 'doWhile') {
        window.open('dowhile.html', '_blank');
    }
}

window.onload = function() {
    const number = localStorage.getItem('number');
    const multiplier = localStorage.getItem('multiplier');

    if (number && multiplier) {
        const pageTitle = document.title;
        // if (pageTitle.includes('For Loop')) {
        if (pageTitle === "Multiplication Table - For Loop") {
            displayForLoop(parseInt(number), parseInt(multiplier));
        } 
        if (pageTitle === "Multiplication Table - Do While Loop") {
            displayDoWhileLoop(parseInt(number), parseInt(multiplier));
        } 
        if (pageTitle === "Multiplication Table - While Loop") {
            displayWhileLoop(parseInt(number), parseInt(multiplier));
        }
    }
}

function displayForLoop(number, multiplier) {
    let forTable = '<ul>';
    for (let i = 1; i <= multiplier; i++) {
        forTable += `<li>${number} x ${i} = ${number * i}</li>`;
    }
    forTable += '</ul>';
    
    document.getElementById('heading').innerText = `Multiplication Table for ${number}`;
    document.getElementById('forLoop').innerHTML = forTable;
}

function displayWhileLoop(number, multiplier) {
    let whileTable = '<ul>';
    let i = 1;
    while (i <= multiplier) {
        whileTable += `<li>${number} x ${i} = ${number * i}</li>`;
        i++;
    }
    whileTable += '</ul>';
    
    document.getElementById('heading').innerText = `Multiplication Table for ${number}`;
    document.getElementById('whileLoop').innerHTML = whileTable;
}

function displayDoWhileLoop(number, multiplier) {
    let doWhileTable = '<ul>';
    let i = 1;
    do {
        doWhileTable += `<li>${number} x ${i} = ${number * i}</li>`;
        i++;
    } while (i <= multiplier);
    doWhileTable += '</ul>';
    
    document.getElementById('heading').innerText = `Multiplication Table for ${number}`;
    document.getElementById('doWhileLoop').innerHTML = doWhileTable;
}
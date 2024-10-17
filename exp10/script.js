function multiplicationTableFor(number, multiplier) {
    console.log(`Multiplication Table for ${number} (using for loop):`);
    for (let i = 1; i <= multiplier; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function multiplicationTableWhile(number, multiplier) {
    console.log(`Multiplication Table for ${number} (using while loop):`);
    let i = 1;
    while (i <= multiplier) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    }
}

function multiplicationTableDoWhile(number, multiplier) {
    console.log(`Multiplication Table for ${number} (using do-while loop):`);
    let i = 1;
    do {
        console.log(`${number} x ${i} = ${number * i}`);
        i++;
    } while (i <= multiplier);
}

function generateMultiplicationTable(loopType, number, multiplier) {
    switch (loopType) {
        case 'for':
            multiplicationTableFor(number, multiplier);
            break;
        case 'while':
            multiplicationTableWhile(number, multiplier);
            break;
        case 'do-while':
            multiplicationTableDoWhile(number, multiplier);
            break;
        default:
            console.log(
                "Please provide a valid loop type: 'for', 'while', or 'do-while'."
            );
    }
}

const args = process.argv.slice(3);
const loopType = args[0];
const number = parseInt(args[1]);
const multiplier = parseInt(args[2]);

if (isNaN(number) || isNaN(multiplier)) {
    console.log('Please provide a valid number as input.');
} else if (!loopType) {
    console.log("Please provide the loop type: 'for', 'while', or 'do-while'.");
} else {
    generateMultiplicationTable(loopType, number, multiplier);
}
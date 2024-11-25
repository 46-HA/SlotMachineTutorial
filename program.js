const prompt = require('prompt-sync')();

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter amount to deposit: ');
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Please enter a valid number");
    } else {
        return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt('Enter amount of lines: ');
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines < 4) {
            console.log("Please enter a valid number");
    } else {
        return numberOfLines;
        }
    }
};

//const amountDeposit = deposit();
const lineAmount = getNumberOfLines();
//console.log(amountDeposit);
console.log(lineAmount);
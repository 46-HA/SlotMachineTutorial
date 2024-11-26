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
        const lines = prompt('Enter amount of lines (1-3): ');
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Please enter a valid number");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const stringBet = prompt('Enter bet amount per line: ');
        const bet = parseFloat(stringBet);

        if (isNaN(bet) || bet <= 0 || bet > balance / lines) {
            console.log("Invalid bet amount");
        } else {
            return bet;
        }
    }
};

let balance = deposit();
const lineAmount = getNumberOfLines();
const bet = getBet(balance, lineAmount);

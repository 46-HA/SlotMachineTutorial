const prompt = require('prompt-sync')();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

// Function to calculate winnings
const calculateWinnings = (reels, bet, lines) => {
    let winnings = 0;
    for (let i = 0; i < lines; i++) {
        const symbols = reels.map(reel => reel[i]);
        const allSame = symbols.every(symbol => symbol === symbols[0]);
        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
};

// Deposit function
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

// Get the number of lines the user wants to bet on (1-3)
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

// Get the bet amount for each line
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

// Spin the reels and return the results
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const REELS = [[], [], []];
    for (let i = 0; i < COLUMNS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectSymbol = reelSymbols[randomIndex];
            REELS[i].push(selectSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return REELS;
};

// Main game flow
let balance = deposit();
const lineAmount = getNumberOfLines();
const bet = getBet(balance, lineAmount);

const reels = spin();
console.log('Reels:', reels);

const winnings = calculateWinnings(reels, bet, lineAmount);
balance += winnings;
console.log("You won, your new balance is: $" + balance);

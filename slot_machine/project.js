// 1. Deposit some money -- Done
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
    var numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.")
        numberDepositAmount = deposit();
    }
    return numberDepositAmount;
};

const getNumberOfLine = () => {
    const numLines = prompt("Enter number of lines (1 - 3): ");
    var lines = parseFloat(numLines);

    if (isNaN(lines) || lines < 1 || lines > 3) {
        console.log("Invalid number of lines, try again.");
        lines = getNumberOfLine();
    }
    return lines;
};

const depositAmount = deposit();
console.log(depositAmount);

const numLines = getNumberOfLine();
console.log(numLines);
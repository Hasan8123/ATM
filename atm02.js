import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter Your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter Your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Select Your Transaction"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [5000, 10000, 15000, 20000],
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const bal = Math.floor(Math.random() * 100000);
    console.log(bal);
    const EnteredAmount = answers.amount;
    if (bal >= EnteredAmount) {
        const remianing = bal - EnteredAmount;
        console.log("Your Remaining Balance is ", remianing);
    }
    else {
        console.log("Insufficient Balance");
    }
}
// console.log(answers)

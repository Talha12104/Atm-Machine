#! /usr/bin/env node
import inquirer from "inquirer";
//Variable of Account Balance && Pin Code
let mybal = 100000; // Dollar
let mypin = 1122; // pin code in number
//Conditional Statments
//First Pin Correct or Incorrect
//Second List what want to do.
let pinAns = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter Pin Code"
});
if (pinAns.pin === mypin) {
    console.log("Pin is Corrrect");
    let operator = await inquirer.prompt([{
            name: "operator",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Balance"]
        }
    ]);
    if (operator.operator === "Withdraw") {
        let remAcc = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter Amount",
            }
        ]);
        mybal -= remAcc.amount;
        console.log(`Your remaining Balance is ${mybal}`);
    }
    else if (operator.operator === "Fast Cash") {
        let fastcash = await inquirer.prompt([{
                name: "cash",
                type: "list",
                choices: ["10000", "20000", "30000", "40000", "Enter Amount"]
            }]);
        if (fastcash.cash === "10000") {
            mybal -= 10000;
            console.log(`Your remaining Balance is ${mybal}`);
        }
        else if (fastcash.cash === "20000") {
            mybal -= 20000;
            console.log(`Your remaining Balance is ${mybal}`);
        }
        else if (fastcash.cash === "20000") {
            mybal -= 20000;
            console.log(`Your remaining Balance is ${mybal}`);
        }
        else if (fastcash.cash === "30000") {
            mybal -= 30000;
            console.log(`Your remaining Balance is ${mybal}`);
        }
        else if (fastcash.cash === "40000") {
            mybal -= 40000;
            console.log(`Your remaining Balance is ${mybal}`);
        }
        else if (fastcash.cash === "Enter Amount") {
            let fasAmmount = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter Amount",
                }
            ]);
            mybal -= fasAmmount.amount;
            console.log(`Your remaining Balance is ${mybal}`);
        }
    }
    else if (operator.operator === "Check Balance") {
        console.log(`Your account balance is ${mybal}`);
    }
}
//incorrect pin else command
else {
    console.log("Please Enter Valid pin code.");
}

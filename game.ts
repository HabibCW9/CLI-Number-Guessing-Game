import { log } from "console";
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt({
  message: "Please Guess a Number (Between 1-6)",
  type: "number",
  name: "userInput",
});

if (answer.userInput === randomNumber) {
  console.log("Congratulation! You won the Game");
} else {
  console.log("You guessed Wrong Number! You loss the Game");
}

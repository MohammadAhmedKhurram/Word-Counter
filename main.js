#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.redBright("Welcome to the Word Counter"));
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.cyan("Enter your group of words.")
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellow(`Word count is ${words.length}`));

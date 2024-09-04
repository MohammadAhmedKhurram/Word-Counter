#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgYellow.redBright("Welcome to the Word Counter!"));
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.cyan("Enter your group of words...")
    }
]);
const cleanedSentence = answer.Sentence.trim().replace(/[^\w\s]/g, '');
const words = cleanedSentence.split(/\s+/).filter(word => word.length > 0);
console.log(chalk.yellow.bold("Word count is"), chalk.green.bold(words.length.toString()));
words.forEach(element => console.log(chalk.green(element)));

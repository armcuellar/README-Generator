// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // Prompt to get title for README
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?'
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            console.log(data)
            console.log(generateMarkdown(data))
            return generateMarkdown(data)
        })
        .then(markupData => {
            writeToFile('readme.md', markupData);

        });

}

// Function call to initialize app
init();

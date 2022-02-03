// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // Prompt to get title for README
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of the project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add usage of the project:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add a contribution guideline of the project:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add how to test project:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a License:',
            choices: ['none', 'MIT', 'GNU GPLv3', 'CC0']
        },
        {
            type: 'input',
            name: 'gitHubUsername',
            message: 'Enter your gitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your ename:'
        },
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
            return generateMarkdown(data)
        })
        .then(markupData => {
            writeToFile('readme.md', markupData);

        });

}

// Function call to initialize app
init();

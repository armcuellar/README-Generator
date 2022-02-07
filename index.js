// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const validateEmail = require('validate_email')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // Prompt to get title for README
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Please enter your project's Title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of the project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for usage:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contributing guidelines?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How to run test for your project?'
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
            message: 'Enter your email: (only valid email is accepted)',
            validate: validateEmail
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
            writeToFile('output/readme.md', markupData);
            console.log("readme successfuly created on output folder!")
        });

}

// Function call to initialize app
init();

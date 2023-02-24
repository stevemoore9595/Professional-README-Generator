// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// An array of questions for user the input
const questions = [{
    type: 'input',
    message:'What is title of the project?', 
    name: 'Title'
}, {
    type: 'input',
    message: 'What is the description of your prject (your motivation, why, what problem did it solve, what did you learn)?', 
    name: 'Description'
}, {
    type: 'input',
    message: 'What is required to install the project?', 
    name: 'Installation'
}, {
    type: 'input',
    message: 'What is this project used for?', 
    name: 'Usage'
}, {
    type: 'list',
    message: 'Which license would you like to use?', 
    name: 'License',
    choices: ['MIT','Mozilla', 'Apache 2.0']
}, {
    type: 'input',
    message: 'What are the guidelines on how to contribute?', 
    name: 'Contributing'
}, {
    type: 'input',
    message: 'What are the instructions to test the project?', 
    name: 'Tests'
}, {
    type: 'input',
    message: 'Do you have any questions about this project?',
    name: 'Questions'
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'Username'
}, {
    type: 'input',
    message: 'What is your email?', 
    name: 'Email'
}];

// Function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, generateMarkdown(data), error => {
        if (error) {
           return console.log(error)
        } else {
            console.log('success')
        }
    });
};
// Function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', data);
        console.log(data);
    }); 
};

// Function call to initialize app
init();

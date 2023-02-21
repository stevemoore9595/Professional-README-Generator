// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = ('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message:'What is title of the project?', 
    name: 'Title',
}, {
    type: 'input',
    message: 'What is the description of your prject (your motivation, why, what problem did it solve, what did you learn)?', 
    name: 'Description',
}, {
    type: 'input',
    message: 'Is a Table of Contents required for the project?', 
    name: 'Table of Contents',
}, {
    type: 'input',
    message: 'What is required to install the project?', 
    name: 'Installation',
}, {
    type: 'input',
    message: 'What is this project used for?', 
    name: 'Usage',
}, {
    type: 'input',
    message: 'What is the name of the license?', 
    name: 'License',
}, {
    type: 'input',
    message: 'What are the guidelines on how to contribute?', 
    name: 'Contributing',
}, {
    type: 'input',
    message: 'What are the instructions to test the project?', 
    name: 'Tests',
}, {
    type: 'input',
    message: 'What is your GitHub username?, What is your email?', 
    name: 'Questions',
}];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    try {
        fs.writeFileSync(filename, data);
            // console.log(file, data)
    } catch (error) {
         console.log(error);
        }; 
};
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(data => {
        writeToFile('README.md', generateMarkdown);
        console.log(data);
    }); 
};

// Function call to initialize app
init();

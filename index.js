// TODO: Include packages needed for this application

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
    message: 'Table of Contents', 
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
    name: 'How to Contribute',
}, {
    type: 'input',
    message: 'What are the instructions to test the project?', 
    name: 'Tests',
}, {
    type: 'input',
    message: 'What is your GitHub username?, What is your email', 
    name: 'Questions',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

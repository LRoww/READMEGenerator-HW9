// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = ["Title:", "Description:", "Installation instructions:", "Usage instructions and examples:", "Who contributed:", "Tests instructions:"];
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of your application:',
  },
  {
    type: 'input',
    name: 'discription',
    message: 'Description:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructions and examples:',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed:',
  },
    {
    type: 'input',
    name: 'test',
    message: 'Tests instructions:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

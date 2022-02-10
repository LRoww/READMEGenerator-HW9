// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
// const questions = ["Title:", "Description:", "Installation instructions:", "Usage instructions and examples:", "Who contributed:", "Tests instructions:"];
const questions = () => {
  return inquirer.prompt([
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
    {
      type: 'list',
      name: 'license',
      message: 'Select licence:',
      choices: ['Apache','MIT License', 'GNU GPLv3'], //https://choosealicense.com/
    },
    {
      type: 'input',
      name: 'username',
      message: 'Github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email:', 
    },
  ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => writeToFile("README.md", generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
};

// Function call to initialize app
init();

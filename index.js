//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [{
  type: 'input',
  message: 'What is the title of your project?',
  name: 'title',
},
{
  type: 'input',
  message: 'Describe your project.',
  name: 'description',
},
{
  type: 'input',
  message: 'Write the installation of your project.',
  name: 'installation',
},
{
  type: 'input',
  message: 'Write the usage of your project.',
  name: 'usage',
},
{
  type: 'list',
  message: 'Please choose your license.',
  name: 'license',
  choices: ['MIT', 'Apache', 'GPL', 'none']
},
{
  type: 'input',
  message: 'List any contributors.',
  name: 'contributing',
},
{
  type: 'input',
  message: 'Write any tests your have for your project.',
  name: 'tests',
},
{
  type: 'input',
  message: 'What is your GitHub username?',
  name: 'gitHubUsername',
},
{
  type: 'input',
  message: 'What is your email?',
  name: 'email',
},];

inquirer
//prompts the questions using node.js
  .prompt(questions)
//created a README file with the generateMarkdown function
  .then((response) => {
    fs.writeFile('README.md', generateMarkdown(response) , (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
    console.log(response); 
}
  );
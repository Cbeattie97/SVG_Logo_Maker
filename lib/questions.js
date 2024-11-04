// lib/questions.js
const inquirer = require('inquirer');

const questions = () => inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose the shape for the logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:'
    }
]);

module.exports = questions;



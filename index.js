
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

function LogoPrompts(){
    return inquirer .prompt([
        {
            type: 'input',
            name: 'Letters',
            message: 'What letters will display in your logo?'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like in your logo?',
            choices: ['Square', 'Circle', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape?'
        },
        {
            type: 'input',
            name: 'backgroundColor',
            message: 'What color would you like the background?'
        }
    ])
}

const generateSVG = () => {
    LogoPrompts()
        .then((response) => {
            const Logo = generateSVG(response);

            fs.writeFile('./examples', Logo, (err) => {
                err ? console.error(err) : console.log('Success! Your logo has been created!');
            });
        });
};
function init() {
    generateSVG();
}

// Function call to initialize app
init();
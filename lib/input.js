// lib/input.js
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

const shapes = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
};

async function createLogo() {
    const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword (or a hex number) for the text:',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword (or a hex number) for the shape:',
        },
    ]);

    const ShapeClass = shapes[shapeType];
    const shape = new ShapeClass();
    shape.setColor(shapeColor);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
}

module.exports = createLogo;

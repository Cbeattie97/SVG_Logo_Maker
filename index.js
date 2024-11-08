// index.js
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = {
    circle: require('./lib/shapes').Circle,
    triangle: require('./lib/shapes').Triangle,
    square: require('./lib/shapes').Square
};

class svg{
    constructor(){
    this.textElement = '';
    this.shapeType = '';
}
render() {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`
}
setText(text,color){
    this.textElement = `<text x="50" y="50" font-size="20" text-anchor="middle" fill="${color}">${text}</text>`;
}
setShape(shape){
    this.shapeElement = shape;
}
}

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
// function createLogo({ text, textColor, shapeType, shapeColor }) {
//     let shape;
//     switch (shapeType) {
//         case 'circle':
//             shape = new Circle();
//             break;
//         case 'triangle':
//             shape = new Triangle();
//             break;
//         case 'square':
//             shape = new Square();
//             break;
//     }

//     shape.setColor(shapeColor);
//     return `
//     <?xml version="1.0" encoding="UTF-8" ?>
//     <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//         ${shape.render()}
//         <text x="50" y="50" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
//     </svg>
//     `;
// }

// questions().then(answers => {
//     const logo = createLogo(answers);
//     fs.writeFileSync('logo.svg', logo);
// });

// module.exports = { createLogo };
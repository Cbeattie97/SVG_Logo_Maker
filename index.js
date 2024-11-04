// index.js
const fs = require('fs');
const questions = require('./lib/questions.js');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

function createLogo({ text, textColor, shapeType, shapeColor }) {
    let shape;
    switch (shapeType) {
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'square':
            shape = new Square();
            break;
    }

    shape.setColor(shapeColor);
    return `
    <?xml version="1.0" encoding="UTF-8" ?>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="50" y="50" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
}

questions().then(answers => {
    const logo = createLogo(answers);
    fs.writeFileSync('logo.svg', logo);
});

module.exports = { createLogo };
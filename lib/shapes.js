// lib/shapes.js
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error( 'method not implemented');
    }
}


class Circle extends Shape {
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="50,15 90,85 10,85" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };

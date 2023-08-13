// Initial test

const generateSVG = require('./generateSVG');

describe("Triangle Test", () => {
    test('Selecting Triangle and Blue should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182 56, 182" style: fill="blue" />');
    });
});

describe("Square Test", () => {
    test('Selecting Square and Red should create a red square', () => {
const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual('<rect style: fill="red" />');
});
});

describe("Circle Test", () => {
    test('Selecting Circle and Yellow should create a blue circle', () => {
const shape = new Circle();
shape.setColor("yellow");
expect(shape.render()).toEqual('<circle style: fill="yellow" />');
});
});
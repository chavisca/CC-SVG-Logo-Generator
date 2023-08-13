// Initial test

const renderSVG = require('./generateSVG');

const prefix = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">';
const suffix = '</text></svg>';
const textPrefix = '"/><text fill="';
const trianglePrefix = '<polygon points="150, 18, 244, 182 56, 182" style="fill:';
const squarePrefix = '<rect width="200" height="200" x="50" style="fill:';
const circlePrefix = '<circle cx="50%" cy="50%" r="40%" style="fill:';
const triangleTextSuffix = ' x="50%" y="70%" text-anchor="middle" font-size="300%">';
const textSuffix = ' x="50%" y="60%" text-anchor="middle" font-size="500%">';

describe("Triangle Test", () => {
    test('Selecting Triangle and Blue should create a blue triangle', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'blue', 
            logoShape: 'Triangle', 
            logoShapeColor: 'blue' 
        };
    expect(renderSVG(data)).toEqual(`${prefix}${trianglePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${triangleTextSuffix}${data.logoText}${suffix}`);
    });
});

describe("Square Test", () => {
    test('Selecting Square and Red should create a red square', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'red', 
            logoShape: 'Square', 
            logoShapeColor: 'red' 
        };
        expect(renderSVG(data)).toEqual(`${prefix}${squarePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${textSuffix}${data.logoText}${suffix}`);
    });
});

describe("Circle Test", () => {
    test('Selecting Circle and Yellow should create a yellow circle', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'yellow', 
            logoShape: 'Circle', 
            logoShapeColor: 'yellow' 
        };
        expect(renderSVG(data)).toEqual(`${prefix}${circlePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${textSuffix}${data.logoText}${suffix}`);
    });
});

describe("Circle Test", () => {
    test('Selecting Circle and #33CCFF for text and #FFFFFF for shape color should create a black circle with cornflower blue text', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: '#33CCFF', 
            logoShape: 'Circle', 
            logoShapeColor: '#FFFFFF' 
        };
        expect(renderSVG(data)).toEqual(`${prefix}${circlePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${textSuffix}${data.logoText}${suffix}`);
    });
});
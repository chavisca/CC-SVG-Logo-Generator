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

// Tests Triangle against dynamic text colors for text and shape
describe("Triangle Test", () => {
    test('Selecting White and Triangle and Blue should create a blue triangle with white text', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'white', 
            logoShape: 'Triangle', 
            logoShapeColor: 'blue' 
        };
    expect(renderSVG(data)).toEqual(`${prefix}${trianglePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${triangleTextSuffix}${data.logoText}${suffix}`);
    });
});
// Tests Square against dynamic text colors for text and shape
describe("Square Test", () => {
    test('Selecting Yellow and Square and Red should create a red square with yellow text', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'yellow', 
            logoShape: 'Square', 
            logoShapeColor: 'red' 
        };
        expect(renderSVG(data)).toEqual(`${prefix}${squarePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${textSuffix}${data.logoText}${suffix}`);
    });
});
// Tests Circle against dynamic text colors for text and shape
describe("Circle Test", () => {
    test('Selecting Black and Circle and Yellow should create a yellow circle with black text', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'black', 
            logoShape: 'Circle', 
            logoShapeColor: 'yellow' 
        };
        expect(renderSVG(data)).toEqual(`${prefix}${circlePrefix}${data.logoShapeColor}${textPrefix}${data.logoTextColor}"${textSuffix}${data.logoText}${suffix}`);
    });
});
// Tests Circle against hexcodes
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
// Initial test

const renderSVG = require('./generateSVG');

describe("Triangle Test", () => {
    test('Selecting Triangle and Blue should create a blue triangle', () => {
        const data = { 
            logoText: 'TXT', 
            logoTextColor: 'blue', 
            logoShape: 'Triangle', 
            logoShapeColor: 'blue' 
        };
    expect(renderSVG(data)).toEqual('<svg width="300" height="200"><polygon points="150, 18, 244, 182 56, 182" style: fill="blue"/><text fill="blue">TXT</text></svg>');
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
    expect(renderSVG(data)).toEqual('<svg width="300" height="200"><rect style: fill="red"/><text fill="red">TXT</text></svg>');
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
    expect(renderSVG(data)).toEqual('<svg width="300" height="200"><circle style: fill="yellow"/><text fill="yellow">TXT</text></svg>');
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
    expect(renderSVG(data)).toEqual('<svg width="300" height="200"><circle style: fill="#FFFFFF"/><text fill="#33CCFF">TXT</text></svg>');
    });
});
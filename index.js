const inquirer = require('inquirer');
const fs = require('fs');
const renderSVG = require('./lib/generateSVG');
const outputFileName = "./output/logo.svg";
const logoShapes = ['Circle', 'Triangle', 'Square'];
const questions = [
    {
        type: 'input',
        message: 'Would you like any text on the logo?  If so, enter up to three characters.',
        name: 'logoText',
        default: 'TXT',
    },
    {
        type: 'input',
        message: 'What color would you like for the TEXT? Enter a color keyword or a hexadecimal code.',
        name: 'logoTextColor',
        default: 'Black',
    },
    {
        type: 'list',
        message: 'What shape would you like for the logo?  ',
        name: 'logoShape',
        choices: logoShapes,
        default: 'Circle',
    },
    {
        type: 'input',
        message: 'What color would you like for the SHAPE? Enter a color keyword or a hexadecimal code.',
        name: 'logoShapeColor',
        default: 'White',
    },
];

//Function to create file
function writeToFile(fileName, data) {
    // Fill with SVG creation lines, normal template here:
    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Generated ' + fileName);
        }
    });
};

// Function to initialize app
function init () {
    inquirer.prompt(questions)
    .then (response => {
        const fileTBG = renderSVG(response);
        writeToFile(outputFileName, fileTBG);
    })
}

init();
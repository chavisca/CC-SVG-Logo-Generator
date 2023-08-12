const inquirer = require('inquirer');
const logoShapes = ['Circle', 'Triangle', 'Square'];
const questions = [
    {
        type: input,
        message: 'Would you like any text on the logo?  If so, enter up to three characters.',
        name: logoText,
    },
    {
        type: input,
        message: 'What color would you like for the TEXT? Enter a color keyword or a hexadecimal code.',
        name: logoTextColor,
    },
    {
        type: list,
        message: 'What shape would you like for the logo?  ',
        name: logoShape,
        choices: logoShapes,
    },
    {
        type: input,
        message: 'What color would you like for the SHAPE? Enter a color keyword or a hexadecimal code.',
        name: logoShapeColor,
    },
];

// Function to initialize app
function init () {
    inquirer.prompt(questions)
    .then (response => {
    })
}

init();
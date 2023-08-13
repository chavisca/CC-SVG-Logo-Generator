function renderSVG(data){
    const text = data.logoText;
    const textColor = data.logoTextColor;
    const shapeChoice = data.logoShape;
    const shapeColor = data.logoShapeColor;
    const parentShape = '<svg width="300" height="200">';
    let svgString = "";

    //Maps the appropriate shape element for the SVG string based on user input

    function mapShape(logoShape) {
    let shapeMap;

    switch(logoShape) {
    case "Square":
        shapeMap = 'rect';
        break;
    case "Triangle":
        shapeMap = 'polygon';
        break;
    case "Circle":
        shapeMap = 'Circle';
        break;
    };
    return shapeMap;
};

const shapeMap = mapShape(shapeChoice);


//TODO:  Create classes for each shape and map constructor for easy object creation
class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    
    generateSVG(shapeString) {
        return parentShape + 
        "<" + shapeString + "/>" +
        "<" + textString + ">" +
        this.text + "</text>" +
        "</svg>";
    }
}

// Circle Class
class Circle extends Shape{
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    generateSVG() {
    const shapeString = `${this.shapeMap} style: fill="${this.shapeColor}"`;
    const textString = `text fill="${this.textColor}"`;

    return super.generateSVG(shapeString);
    }

    get shapeMap() {
        return 'circle';
    }
}

// Square Class
class Square {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    generateSVG() {
        const shapeString = `${this.shapeMap} style: fill="${this.shapeColor}"`;
        const textString = `text fill="${this.textColor}"`;
    
        return super.generateSVG(shapeString);
        }
    
        get shapeMap() {
            return 'square';
        }
    }

    // Triangle Class
class Triangle {
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    generateSVG() {
        const shapeString = `${this.shapeMap} points="150, 18 244, 182 56, 182" style: fill="${this.shapeColor}"`;
        const textString = `text fill="${this.textColor}"`;
    
        return super.generateSVG(shapeString);
        }
    
        get shapeMap() {
            return 'triangle';
        }
    }

const shapeInstance = new `${shape}`(text, textColor, shapeColor);
const shapeString = shapeInstance.generateSVG();




//TODO:  Write Jest Tests for each class
//TODO:  Record video showing SVG creation for each class and passing each JEST Test
//TODO:  Remove existing README and update to professional format
//TODO:  Test some more
}
module.exports = generateSVG;
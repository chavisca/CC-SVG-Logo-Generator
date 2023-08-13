class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    get details() {
        return "";
    }
    
    generateSVG(parentShape) {
        const shapeString = `${this.shapeMap}${this.details} style: fill="${this.shapeColor}"`;
        const textString = `text fill="${this.textColor}"`;
        return (parentShape + 
        `<${shapeString}/>` +
        `<${textString}>${this.text}</text>` +
        '</svg>');
    };
}

// Circle Class
class Circle extends Shape{
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    get shapeMap() {
        return 'circle';
    }
}

// Square Class
class Square extends Shape{
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

        get shapeMap() {
            return 'rect';
        }
    }

    // Triangle Class
    class Triangle extends Shape {
        constructor(text, textColor, shapeColor) {
            super(text, textColor, shapeColor);
        }
        
        get details() {
            return 'points="150, 18, 244, 182 56, 182"';
        }
        get shapeMap() {
            return 'polygon';
        }
    }

    module.exports = { Circle, Square, Triangle };


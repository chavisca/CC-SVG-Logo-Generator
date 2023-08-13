function renderSVG(data) {
    const text = data.logoText;
    const textColor = data.logoTextColor;
    const shapeChoice = data.logoShape;
    const shapeColor = data.logoShapeColor;
    const parentShape = '<svg width="300" height="200">';

    //Maps the appropriate shape element for the SVG string based on user input

    function mapShape(logoShape) {

        switch (logoShape) {
            case "Square":
                shapeClass = Square;
                break;
            case "Triangle":
                shapeClass = Triangle;
                break;
            case "Circle":
                shapeClass = Circle;
                break;
        }

        // const shapeClass = mapShape(shapeChoice);
        const shapeInstance = new shapeClass(text, textColor, shapeColor);
        const shapeString = shapeInstance.generateSVG(parentShape, shapeInstance.shapeString, shapeInstance.textString);

        return shapeString;
    }

    //TODO:  Create classes for each shape and map constructor for easy object creation
    class Shape {
        constructor(text, textColor, shapeColor) {
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
    class Circle extends Shape {
        constructor(text, textColor, shapeColor) {
            super(text, textColor, shapeColor);
        }

        get shapeMap() {
            return 'circle';
        }
    }

    // Square Class
    class Square extends Shape {
        constructor(text, textColor, shapeColor) {
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
            return ' points="150, 18, 244, 182 56, 182"';
        }
        get shapeMap() {
            return 'polygon';
        }
    }
    return mapShape(shapeChoice);
    
};



//TODO:  Write Jest Tests for each class
//TODO:  Record video showing SVG creation for each class and passing each JEST Test
//TODO:  Remove existing README and update to professional format
//TODO:  Test some more
module.exports = renderSVG;
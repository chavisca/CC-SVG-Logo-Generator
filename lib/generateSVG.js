function renderSVG(data) {
    const text = data.logoText;
    const textColor = data.logoTextColor;
    const shapeChoice = data.logoShape;
    const shapeColor = data.logoShapeColor;
    const parentShape = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">';

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

        const shapeInstance = new shapeClass(text, textColor, shapeColor);
        const shapeString = shapeInstance.generateSVG(parentShape, shapeInstance.shapeString, shapeInstance.textString);

        return shapeString;
    }

  // Shape Parent Class
    class Shape {
        constructor(text, textColor, shapeColor) {
            this.text = text;
            this.textColor = textColor;
            this.shapeColor = shapeColor;
        }
        // Details is used for any additional shape formats as necessary, such as points for polygon shapes
        get details() {
            return "";
        }
        // Textdetails is used for any additional text formats as necessary to polish the alignment and size of the text
        get textDetails() {
            return ' x="50%" y="60%" text-anchor="middle" font-size="500%"';
        }

        generateSVG(parentShape) {
            const shapeString = `${this.shapeMap}${this.details} style="fill:${this.shapeColor}"`;
            const textString = `text fill="${this.textColor}"`;
            return (parentShape +
                `<${shapeString}/>` +
                `<${textString}${this.textDetails}>${this.text}</text>` +
                '</svg>');
        };
    }

    // Circle Class
    class Circle extends Shape {
        constructor(text, textColor, shapeColor) {
            super(text, textColor, shapeColor);
        }

        get details() {
            return ' cx="50%" cy="50%" r="40%"';
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

        get details() {
            return ' width="200" height="200" x="50"';
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

        get textDetails() {
            return ' x="50%" y="70%" text-anchor="middle" font-size="300%"';
        }

        get shapeMap() {
            return 'polygon';
        }
    }
    return mapShape(shapeChoice);
    
};

module.exports = renderSVG;
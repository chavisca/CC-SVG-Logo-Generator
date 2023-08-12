function renderSVG(data){
    const text = data.logoText;
    const textColor = data.logoTextColor;
    const shape = data.logoShape;
    const shapeColor = data.logoShapeColor;
    const parentShape = "<svg width="300" height="200">";

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

   //For Circle
   if (shapeMap === 'Circle') {
    let shapeString = `${shapeMap} style: fill="${shapeColor}"`;
    let textString = `text fill="${textColor}"`;

    let svgString = parentShape + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   } else if (shapeMap === 'Square') {
    //For Square
    let shapeString = `${shapeMap} style: fill="${shapeColor}"`;
    let textString = `text fill="${textColor}"`;

    let svgString = parentShape + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   } else {
    //For Triangle
    let shapeString = `${shapeMap} points="150, 18 244, 182 56, 182" style: fill="${shapeColor}"`;
    let textString = `text fill="${textColor}"`;

    let svgString = parentShape + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   };
};

mapShape();

//TODO:  Create classes for each shape and map constructor for easy object creation
//TODO:  Write Jest Tests for each class
//TODO:  Record video showing SVG creation for each class and passing each JEST Test
//TODO:  Remove existing README and update to professional format
//TODO:  Test some more

module.exports = generateSVG;
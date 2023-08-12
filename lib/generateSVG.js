function generateSVG(data){
    const text = data.logoText;
    const textColor = data.logoTextColor;
    const shape = data.logoShape;
    const shapeColor = data.logoShapeColor;

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
    let textString = `text fill="${textColor}`;

    let svgString = "<svg width="300" height="200">" + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   } else if (shapeMap === 'Square') {
    //For Square
    let shapeString = `${shapeMap} style: fill="${shapeColor}"`;
    let textString = `text fill="${textColor}`;

    let svgString = "<svg width="300" height="200">" + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   } else {
    //For Triangle
    let shapeString = `${shapeMap} points="150, 18 244, 182 56, 182" style: fill="${shapeColor}"`;
    let textString = `text fill="${textColor}`;

    let svgString = "<svg width="300" height="200">" + 
    "<" + shapeString + "/>" +
    "<" + textString + ">" +
    text + "</text>" +
    "</svg>";
   };
};

mapShape();

module.exports = generateSVG;
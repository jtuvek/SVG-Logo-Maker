const fs = require("fs");
const { Circle, Triangle, Square } = require("./shapes");

function saveSVGToFile(svgContent, filename) {
  fs.writeFileSync(filename, svgContent, "utf8");
}

function generateSVG(shape, shapeColor, text, textColor) {
  let shapeSvg;

  if (shape === "circle") {
    shapeSvg = new Circle();
  } else if (shape === "triangle") {
    shapeSvg = new Triangle();
  } else if (shape === "square") {
    shapeSvg = new Square();
  }

  shapeSvg.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSvg.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  const filename = "logo.svg"; // Define the filename

  saveSVGToFile(svgContent, filename); // Save SVG content to file

  console.log("Generated " + filename); // Print confirmation
}

module.exports = { generateSVG };

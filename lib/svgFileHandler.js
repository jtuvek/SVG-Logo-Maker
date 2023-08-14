const { Circle, Triangle, Square } = require("./shapes");

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

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSvg.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  return svg;
}

module.exports = { generateSVG };

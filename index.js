const { getUserInput } = require("./lib/userInput");
const { generateSVG } = require("./lib/svgFileHandler");

(async () => {
  const userInput = await getUserInput();

  generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor);

  console.log("Generated logo.svg");
})();

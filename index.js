const { getUserInput } = require("./lib/userInput");
const { generateSVG } = require("./lib/svgFileHandler");
const { saveSVGToFile } = require("./lib/svgFileHandler");

(async () => {
  const userInput = await getUserInput();

  const svg = generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor);

  const filename = "logo.svg";
  saveSVGToFile(svg, filename);

  console.log("Generated " + filename);
})();

const { getUserInput } = require("./lib/userInput");
const { generateSVG } = require("./lib/svgFileHandler");
const { saveSVGToFile } = require("./lib/fileHandler"); // Import the saveSVGToFile function

(async () => {
  const userInput = await getUserInput();

  const svgContent = generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor);

  const filename = "logo.svg";
  saveSVGToFile(svgContent, filename); // Save SVG content to file

  console.log("Generated " + filename);
})();

const { Circle, Triangle, Square } = require("./shapes");

test("Circle render method", () => {
  const circle = new Circle();
  circle.setColor("green");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test("Triangle render method", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test("Square render method", () => {
  const square = new Square();
  square.setColor("red");
  expect(square.render()).toEqual('<rect x="60" y="60" width="180" height="180" fill="red" />');
});

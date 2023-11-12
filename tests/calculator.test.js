const calculator = require("../scripts/calculator");

// edge
test("first num isn't a number", () => {
  expect(calculator("string", 2)).toBe("both inputs must be a number");
});

test("second num isn't a number", () => {
  expect(calculator(4, "string")).toBe("both inputs must be a number");
});

// main
test("Division by 0", () => {
  expect(calculator(4, 0)).toHaveProperty("add", 4);
  expect(calculator(4, 0)).toHaveProperty("subtract", 4);
  expect(calculator(4, 0)).toHaveProperty("divide", "can't divide by 0");
  expect(calculator(4, 0)).toHaveProperty("multiply", 0);
});

test("Works", () => {
  expect(calculator(4, 2)).toHaveProperty("add", 6);
  expect(calculator(4, 2)).toHaveProperty("subtract", 2);
  expect(calculator(4, 2)).toHaveProperty("divide", 2);
  expect(calculator(4, 2)).toHaveProperty("multiply", 8);
});

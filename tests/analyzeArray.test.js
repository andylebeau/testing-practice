const analyzeArray = require("../scripts/analyzeArray");

// edge cases
test("Not a valid array", () => {
  expect(analyzeArray()).toBe("not a valid array");
});

test("Array must be all numbers", () => {
  expect(analyzeArray(["string", 0, 2, 4])).toBe("array must be all numbers");
});

// main
test("Example array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

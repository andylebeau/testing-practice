const reverseString = require("../scripts/reverseString");

test('"test" should return "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});

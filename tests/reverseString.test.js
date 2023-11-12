import reverseString from "../scripts/reverseString";

test('"test" should return "tset"', () => {
  expect(reverseString("test")).toBe("tset");
});

import capitalize from "../scripts/capitalize";

test("Capitalize first character", () => {
  expect(capitalize("t")).toBe("T");
});

test("Capitalize first character", () => {
  expect(capitalize("test")).toBe("Test");
});

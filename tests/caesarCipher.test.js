import caesarCipher from "../scripts/caesarCipher";

// edge cases
test("String is not a string", () => {
  expect(caesarCipher(1, 1)).toBe("not a string");
});

test("Shift is not a number", () => {
  expect(caesarCipher("test", 0)).toBe("number must be a positive integer");
});

test("Shift greater than 25", () => {
  expect(caesarCipher("test", 27)).toBe("uftu");
});

// main
test("All lowercase letters, shift = 1", () => {
  expect(caesarCipher("test", 1)).toBe("uftu");
});

test("With uppercase and symbol, shift = 2", () => {
  expect(caesarCipher("Test!", 2)).toBe("Vguv!");
});

test("With uppercase, symbol and spaces, shift = 3", () => {
  expect(caesarCipher("Test's Test !", 3)).toBe("Whvw'v Whvw !");
});

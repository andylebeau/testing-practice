function caesarCipher(string, shift) {
  // edge cases
  if (typeof string !== "string") return "not a string";
  if (shift < 1 || !Number.isInteger(shift))
    return "number must be a positive integer";
  if (shift > 25) shift = shift % 26;

  // repeat alphabet twice to avoid index math
  const alphabet = "abcdefghijklmnopqrstuvwxyz".repeat(2);

  // create code in lowercase as an array
  const code = string
    .toLowerCase()
    .split("")
    .map((char) => {
      return alphabet.indexOf(char) === -1
        ? char
        : alphabet[alphabet.indexOf(char) + shift];
    });

  // return joined code including all the caps from string
  return code
    .map((char, i) => {
      return string[i].toUpperCase() === string[i]
        ? code[i].toUpperCase()
        : char;
    })
    .join("");
}

module.exports = caesarCipher;

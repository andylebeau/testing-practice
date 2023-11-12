function analyzeArray(array) {
  // edge cases
  if (!Array.isArray(array)) return "not a valid array";
  if (array.some((value) => isNaN(value))) return "array must be all numbers";

  const analyzed = {
    average: Math.round(array.reduce((a, c) => a + c) / array.length),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return analyzed;
}

module.exports = analyzeArray;

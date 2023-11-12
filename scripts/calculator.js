export default function calculator(num1, num2) {
  // edge case
  if (isNaN(num1) || isNaN(num2)) return "both inputs must be a number";

  const add = num1 + num2;
  const subtract = num1 - num2;
  const divide = num2 ? num1 / num2 : "can't divide by 0";
  const multiply = num1 * num2;
  return { add, subtract, divide, multiply };
}

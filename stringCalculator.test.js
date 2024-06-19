
const add = require('./stringCalculator');

test('should return 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('should return number for single number string', () => {
  expect(add("1")).toBe(1);
});

test('should return sum for two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('should return sum for multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw error for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow('Negative numbers not allowed: -2');
  expect(() => add("1,-2,-3")).toThrow('Negative numbers not allowed: -2, -3');
});

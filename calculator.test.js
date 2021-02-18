const calculator = require('./calculator');

test('adds numbers', () => {
  expect(calculator('add', 2, 3)).toBe(5);
  expect(calculator('add', 123, 651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(1136);
});

test('adds negative numbers', () => {
  expect(calculator('add', 2, -3)).toBe(-1);
  expect(calculator('add', 123, -651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(-166);
});

test('subtract numbers', () => {
  expect(calculator('subtract', 2, 3)).toBe(-1);
  expect(calculator('subtract', 123, 651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    -890,
  );
  expect(calculator('subtract', 600, 400)).toBe(200);
});

test('subtract negative numbers', () => {
  expect(calculator('subtract', 2, -3)).toBe(5);
  expect(calculator('subtract', 123, -651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    412,
  );
});

test('throw an error if a non numbers is passed', () => {
  expect(() => calculator('add', 2, '3')).toThrow();
  expect(() => calculator('add', 2, undefined, 167)).toThrow();
  expect(() => calculator('multiply', 13, 15, null)).toThrow();
});

test('multiply numbers', () => {
  expect(calculator('multiply', 2, 3)).toBe(6);
  expect(calculator('multiply', 123, 651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    115904242520892,
  );
});

test('multiply negative numbers', () => {
  expect(calculator('multiply', 2, -3)).toBe(-6);
  expect(calculator('multiply', 123, -651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    -115904242520892,
  );
});

test('divide numbers', () => {
  expect(calculator('divide', 2, 3)).toBe(2 / 3);
  expect(calculator('divide', 123, 651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    123 / 651 / 123 / 6 / 123 / 7 / 1 / 34 / 67 / 1,
  );
});

test('divide negative numbers', () => {
  expect(calculator('divide', 2, -3)).toBe(2 / -3);
  expect(calculator('divide', 123, -651, 123, 6, 123, 7, 1, 34, 67, 1)).toBe(
    123 / -651 / 123 / 6 / 123 / 7 / 1 / 34 / 67 / 1,
  );
});

test('throw an error if no numbers are passed', () => {
  expect(() => calculator('add')).toThrow();
  expect(() => calculator('multiply')).toThrow();
  expect(() => calculator('divide')).toThrow();
});

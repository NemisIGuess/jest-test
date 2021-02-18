const reverseString = require('./reverseString');

test('reverse a single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('throws an error if string is empty', () => {
  expect(() => reverseString('').toThrow());
});

test('throws an error if the passed argument is not a string', () => {
  expect(() => reverseString().toThrow());
});

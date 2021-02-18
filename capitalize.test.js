const capitalize = require('./capitalize');

test(`doesn't change the string if already first letter Uppercase`, () => {
  expect(capitalize('Perfect')).toBe('Perfect');
});

test('capitalize a phrase starting with a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns an error if an empty string is passed', () => {
  expect(() => capitalize('').toThrow());
});

test('capitalize a phrase starting with a number', () => {
  expect(capitalize('24 dogs went to the park')).toBe(
    '24 Dogs went to the park',
  );
});

test('capitalize a phrase starting with punctuation', () => {
  expect(capitalize('¿como estas?')).toBe('¿Como estas?');
});

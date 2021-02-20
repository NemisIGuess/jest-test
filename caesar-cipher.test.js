const cipher = require('./caesar-cipher');

test('works with single letters', () => {
  expect(cipher('A', 1)).toBe('B');
});

test('works with words', () => {
  expect(cipher('Abc', 1)).toBe('Bcd');
});

test('works with phrases', () => {
  expect(cipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('works with negative shift', () => {
  expect(cipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('wraps', () => {
  expect(cipher('Z', 1)).toBe('A');
});

test('works with large shift factors', () => {
  expect(cipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});

test('works with negative large shift factors', () => {
  expect(cipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});

// describe("caesar", function () {
//   it("works with single letters", function () {
//     expect(caesar("A", 1)).toEqual("B");
//   });
//   it("works with words", function () {
//     expect(caesar("Aaa", 1)).toEqual("Bbb");
//   });
//   it("works with phrases", function () {
//     expect(caesar("Hello, World!", 5)).toEqual("Mjqqt, Btwqi!");
//   });
//   it("works with negative shift", function () {
//     expect(caesar("Mjqqt, Btwqi!", -5)).toEqual("Hello, World!");
//   });
//   it("wraps", function () {
//     expect(caesar("Z", 1)).toEqual("A");
//   });
//   it("works with large shift factors", function () {
//     expect(caesar("Hello, World!", 75)).toEqual("Ebiil, Tloia!");
//   });
//   it("works with large negative shift factors", function () {
//     expect(caesar("Hello, World!", -29)).toEqual("Ebiil, Tloia!");
//   });
// });

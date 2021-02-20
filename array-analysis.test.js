const arrAnalysis = require('./array-analysis');

test('works with positive numbers', () => {
  expect(arrAnalysis([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('works with a large amount of numbers', () => {
  expect(
    arrAnalysis([
      1,
      8,
      3,
      4,
      2,
      6,
      19,
      23,
      12,
      9,
      581,
      27,
      1282,
      58,
      12389,
      12,
      30,
      12,
      32,
      12,
      51,
    ]),
  ).toStrictEqual({
    average: 693.952380952381,
    min: 1,
    max: 12389,
    length: 21,
  });
});
test('works with negative numbers', () => {
  expect(arrAnalysis([1, 8, 3, 4, 2, 6, -17])).toStrictEqual({
    average: 1,
    min: -17,
    max: 8,
    length: 7,
  });
});

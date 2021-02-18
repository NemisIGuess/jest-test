function calculator() {
  const action = [...arguments][0];
  const numbers = [...arguments].splice(1);
  if (numbers.some((number) => typeof number !== 'number')) {
    throw new Error('Non number detected');
  }
  switch (action) {
    case 'add':
      return numbers.reduce((prev, curr) => prev + curr);

    case 'subtract':
      return numbers.reduce((prev, curr) => prev - curr);

    case 'multiply':
      return numbers.reduce((prev, curr) => prev * curr);

    case 'divide':
      return numbers.reduce((prev, curr) => prev / curr);

    default:
      break;
  }
}

module.exports = calculator;

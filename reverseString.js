const reverseString = (string) => {
  if (string === '' || typeof string !== 'string') {
    throw new Error('You must pass a non empty string');
  } else {
    let newString = '';
    for (let i = string.length; 0 < i; i--) {
      newString = newString + string[i - 1];
    }
    return newString;
  }
};

module.exports = reverseString;

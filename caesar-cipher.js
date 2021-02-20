const cipher = (string, n) => {
  let x = n;
  let newString = string;
  if (Math.abs(n) > 26) {
    x = n % 26;
  }
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      if (90 - string.charCodeAt(i) < x) {
        let y = x - (90 - string.charCodeAt(i));
        let newCodedChar = 64 + y;
        let newChar = String.fromCharCode(newCodedChar);
        newString =
          newString.substring(0, i) + newChar + newString.substring(i + 1);
        continue;
      } else if (string.charCodeAt(i) + x < 65) {
        let y = x + (string.charCodeAt(i) - 65);
        let newCodedChar = 91 + y;
        let newChar = String.fromCharCode(newCodedChar);
        newString =
          newString.substring(0, i) + newChar + newString.substring(i + 1);
        continue;
      }
      let newCodedChar = string.charCodeAt(i) + x;
      let newChar = String.fromCharCode(newCodedChar);
      newString =
        newString.substring(0, i) + newChar + newString.substring(i + 1);
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      if (122 - string.charCodeAt(i) < x) {
        let y = x - (122 - string.charCodeAt(i));
        let newCodedChar = 96 + y;
        let newChar = String.fromCharCode(newCodedChar);
        newString =
          newString.substring(0, i) + newChar + newString.substring(i + 1);
        continue;
      } else if (string.charCodeAt(i) + x < 97) {
        let y = x + (string.charCodeAt(i) - 97);
        let newCodedChar = 123 + y;
        let newChar = String.fromCharCode(newCodedChar);
        newString =
          newString.substring(0, i) + newChar + newString.substring(i + 1);
        continue;
      }
      let newCodedChar = string.charCodeAt(i) + x;
      let newChar = String.fromCharCode(newCodedChar);
      newString =
        newString.substring(0, i) + newChar + newString.substring(i + 1);
    }
  }
  return newString;
};

module.exports = cipher;

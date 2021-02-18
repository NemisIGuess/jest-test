function capitalize(string) {
  if (string === '') {
    throw new Error('String was empty');
  } else if (string.toLowerCase() !== string) {
    return string;
  } else {
    const letterToReplace = string.match(
      /a|b|c|d|e|f|g|h|i|j|k|l|m|n|ñ|o|p|q|r|s|t|u|v|w|x|y|z/,
    );
    const replacedLetter = letterToReplace[0].toUpperCase();

    return string.replace(letterToReplace, replacedLetter);
    // return string[letterToReplace.indexOf()].toUpperCase() + string.slice(1);
  }
}

module.exports = capitalize;

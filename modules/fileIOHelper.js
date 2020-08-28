const fs = require("fs");
const readline = require("readline");

module.exports = {
  getReadStream: (fileName, options = {}) => {
    return _getReadStream(fileName, options);
  },
  getWriteStream: (fileName, options = {}) => {
    return _getWriteStream(fileName, options);
  },
  getByLineReader: (fileName, options = {}) => {
    const inputStream = _getReadStream(fileName, options);
    return readline.createInterface({
      input: inputStream,
      crlfDelay: Infinity,
    });
  },
};

const _getReadStream = (fileName, options) => {
  return fs.createReadStream(fileName, options);
};

const _getWriteStream = (fileName, options) => {
  return fs.createWriteStream(fileName, options);
};

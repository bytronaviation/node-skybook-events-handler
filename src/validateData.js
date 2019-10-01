const _ = require('lodash');

module.exports = function validateData(body) {
  return _.isString(body.fileData.fileName) && _.isObject(body.fileData.data);
};

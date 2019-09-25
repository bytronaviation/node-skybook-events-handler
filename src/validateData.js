const saveData = require('./saveData');
const _ = require('lodash');

module.exports = function validateData(body) {
  if (!_.isString(body.fileData.fileName) || !_.isObject(body.fileData.data)) {
    throw new Error('Data is not in the correct format');
  }
  saveData(body);
};

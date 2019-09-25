const saveData = require("./saveData");
const _ = require('lodash');

module.exports.validateData = function validateData(body) {
    if (_.isString(body.fileData.fileName) && _.isObject(body.fileData.data)) {
        saveData.saveData(body);
    } else {
        throw new Error('Data is not in the correct format');
    }
};

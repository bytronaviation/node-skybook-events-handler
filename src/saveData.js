const fs = require('fs');
const config = require('config');
const saveFolder = config.get('saveLocation') || './';

module.exports = function saveData(body) {
  const path = `${saveFolder}/${body.fileData.fileName}`;

  if (saveFolder !== './' && !fs.existsSync(saveFolder)) {
    fs.mkdirSync(saveFolder);
  }

  fs.writeFileSync(path, JSON.stringify(body.fileData.data, null, 2));
};

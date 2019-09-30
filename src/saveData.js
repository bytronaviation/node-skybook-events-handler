const fs = require('fs');

module.exports = function saveData(body, saveFolder) {
  const path = `${saveFolder}/${body.fileData.fileName}`;
  if (saveFolder !== './' && !fs.existsSync(saveFolder)) {
    fs.mkdirSync(saveFolder);
  }

  fs.writeFileSync(path, JSON.stringify(body.fileData.data, null, 2));
};

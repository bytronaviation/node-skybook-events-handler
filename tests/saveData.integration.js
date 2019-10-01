const saveData = require('../src/saveData');
const fs = require('fs');

const expectedData = {
  'url': 'test',
  'fileData': {
    'fileName': 'test.json',
    'data': {
      'glossary': {
        'title': 'example glossary'
      }
    }
  }
};

it('should write a file to the filesystem then delete the file', function() {
  expect(fs.existsSync('./data/' + expectedData.fileData.fileName)).toBe(false);

  saveData(expectedData, './data');

  expect(fs.existsSync('./data/' + expectedData.fileData.fileName)).toBe(true);
  expect(fs.readFileSync('./data/' + expectedData.fileData.fileName, 'utf-8'))
      .toEqual(JSON.stringify(expectedData.fileData.data, null, 2));

  fs.unlinkSync('./data/' + expectedData.fileData.fileName);

  expect(fs.existsSync('./data/' + expectedData.fileData.fileName)).toBe(false);
});


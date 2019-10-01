const fs = require('fs');
const saveData = require('../src/saveData');

jest.mock('fs');

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

it('should call fs.existsSync and fs.writeFileSync if data is valid and folder exists', function() {
  expect(fs.existsSync).not.toHaveBeenCalled();
  expect(fs.mkdirSync).not.toHaveBeenCalled();
  expect(fs.writeFileSync).not.toHaveBeenCalled();

  saveData(expectedData, '/testdata');

  expect(fs.existsSync).toHaveBeenCalled();
  expect(fs.writeFileSync).toHaveBeenCalled();

  afterEach(() => {
    fs.mockClear();
    config.mockClear();
  });
});

const validateData = require('../src/validateData');

const expectedData = {
  'url': 'test',
  'fileData': {
    'fileName': 'test.json',
    'data': {
      'glossary': {
        'title': 'example glossary',
      },
    },
  },
};

const badData = {
  'url': 'test',
  'fileData': {
    'fileName': 1,
    'data': 'test',
  },
};

it('should throw error if data is in incorrect format', function() {
  expect(() => {
    validateData.validateData(badData);
  }).toThrow();
});

it('should call the saveData function', () => {
  const saveData = jest.fn();
  const validateData = jest.fn(() => {
    saveData();
  });
  validateData(expectedData);
  expect(saveData).toBeCalled();
});

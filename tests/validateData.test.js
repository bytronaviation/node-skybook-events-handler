const validateData = require('../src/validateData');
const saveData = require('../src/saveData');

const expectedData = {
    "url": "test",
    "fileData": {
        "fileName": "test.json",
        "data": {
            "glossary": {
                "title": "example glossary",
                "GlossDiv": {
                    "title": "S",
                    "GlossList": {
                        "GlossEntry": {
                            "ID": "SGML",
                            "SortAs": "SGML",
                            "GlossTerm": "Standard Generalized Markup Language",
                            "Acronym": "SGML",
                            "Abbrev": "ISO 8879:1986",
                            "GlossDef": {
                                "para": "A meta-markup language, used to create markup languages such as DocBook.",
                                "GlossSeeAlso": [
                                    "GML",
                                    "XML"
                                ]
                            },
                            "GlossSee": "markup"
                        }
                    }
                }
            }
        }
    }
};

const badData = {
    "url": "test",
    "fileData": {
        "fileName": 1,
        "data": "test"
    }
};

it('should throw error if data is in incorrect format', function () {
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

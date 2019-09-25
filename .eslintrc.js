module.exports = {
    "extends": "google",

    "plugins": ["jest"],

    "env": {
        "browser": false,     // browser global variables.
        "node": true,        // Node.js global variables and Node.js-specific rules.
        "amd": false,         // defines require() and define() as global variables as per the amd spec.
        "mocha": false,       // adds all of the Mocha testing global variables.
        "jasmine": false,     // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        "phantomjs": false,   // phantomjs global variables.
        "jquery": false,      // jquery global variables.
        "prototypejs": false, // prototypejs global variables.
        "shelljs": false,     // shelljs global variables.
    },

    "rules": {
        "no-useless-escape": 0,
        "no-restricted-globals": 0,
        "no-duplicate-imports": 0,
        "max-len": [2, {
            code: 120,
            tabWidth: 2,
            ignoreUrls: true
        }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};

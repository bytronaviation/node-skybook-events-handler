module.exports = {
    "extends": "google",

    "plugins": ["jest"],

    "env": {
        "node": true,        // Node.js global variables and Node.js-specific rules.
        "es6": true
    },

    "parserOptions": {
        "ecmaVersion": 2017
    },

    "rules": {
        "require-jsdoc": 0,
        "indent": 2,
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

"use strict";
var tutorialConfigOptions = {
    JS: {
        suffix: 'js',
        runners: [
            'mocha-coderoad'
        ],
        language: {
            suffix: 'js',
            comments: '//',
        }
    },
    Python: {
        runners: [
            'pytest-coderoad'
        ],
        language: {
            suffix: 'py',
            comments: '#',
        }
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfigOptions;

"use strict";
var fs = require('fs');
function concatTests(targetFile, files) {
    if (fs.existsSync(targetFile)) {
        fs.unlink(targetFile);
    }
    files.forEach(function (tests) {
        if (typeof tests === 'string') {
            readAppend(targetFile, tests);
        }
        else if (Object.prototype.toString.call(tests) === '[object Array]') {
            tests.forEach(function (test) {
                readAppend(targetFile, test);
            });
        }
    });
    return targetFile;
}
exports.concatTests = concatTests;
function readAppend(targetFile, file) {
    try {
        var data = fs.readFileSync(file, 'utf8');
        fs.appendFileSync(targetFile, data, 'utf8');
    }
    catch (e) {
        console.log('Error reading test file', e);
    }
}

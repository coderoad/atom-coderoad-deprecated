"use strict";
var fs = require('fs');
function concatTests(targetFile, files) {
    if (fs.existsSync(targetFile)) {
        fs.unlink(targetFile);
    }
    files.forEach(function (test) { return readAppend(targetFile, test); });
    return targetFile;
}
exports.concatTests = concatTests;
function readAppend(targetFile, file) {
    try {
        var data = fs.readFileSync(file, 'utf8');
        fs.appendFileSync(targetFile, data, 'utf8');
        return;
    }
    catch (e) {
        console.log('Error reading test file', e);
    }
}

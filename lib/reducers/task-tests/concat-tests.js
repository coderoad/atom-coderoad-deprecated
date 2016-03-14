"use strict";
var fs = require('fs');
function unlink(targetFile) {
    return new Promise(function (resolve) {
        if (fs.existsSync(targetFile)) {
            fs.unlink(targetFile);
        }
        resolve();
    });
}
function concatTests(targetFile, files) {
    unlink(targetFile).then(function () {
        files.forEach(function (test) {
            return new Promise(function (resolve) {
                resolve(readAppend(targetFile, test));
            });
        });
    });
    return targetFile;
}
exports.concatTests = concatTests;
function readAppend(targetFile, file) {
    try {
        var data = fs.readFileSync(file, 'utf8');
        fs.appendFileSync(targetFile, data, 'utf8');
        return true;
    }
    catch (e) {
        console.log('Error reading test file', e);
    }
}

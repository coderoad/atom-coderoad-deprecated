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
function concatTests(targetFile, files) {
    unlink(targetFile).then(function () {
        files.forEach(function (testPath) {
            return new Promise(function (resolve) {
                resolve(readAppend(targetFile, testPath));
            });
        });
    });
    return;
}
function load(targetFile, files) {
    concatTests(targetFile, files);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = load;

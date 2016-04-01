"use strict";
var fs = require('fs');
var path = require('path');
function getPath(filePath) {
    return path.normalize(path.join(window.coderoad.dir, filePath));
}
function write(filePath, text) {
    try {
        fs.writeFileSync(getPath(filePath), text, 'utf8');
    }
    catch (e) {
        if (e) {
            console.log('Error writing to filePath', filePath);
        }
    }
}
exports.write = write;
function readWrite(writePath, readPath) {
    try {
        write(writePath, fs.readFileSync(getPath(readPath)));
    }
    catch (e) {
        if (e) {
            console.log('Error reading from filePath', readPath);
        }
    }
}
exports.readWrite = readWrite;

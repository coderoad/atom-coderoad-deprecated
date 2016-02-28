"use strict";
var fs = require('fs');
function fileExists(pathToFile) {
    try {
        fs.accessSync(pathToFile, fs.R_OK | fs.W_OK);
    }
    catch (e) {
        if (e) {
            console.log(e);
            return false;
        }
    }
    return true;
}
exports.fileExists = fileExists;

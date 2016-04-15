"use strict";
var fs_1 = require('fs');
function fileExists(pathToFile) {
    try {
        fs_1.accessSync(pathToFile, fs_1.F_OK);
    }
    catch (e) {
        if (e) {
            if (e.code !== 'ENOENT') {
                console.log(e);
            }
            return false;
        }
    }
    return true;
}
exports.fileExists = fileExists;

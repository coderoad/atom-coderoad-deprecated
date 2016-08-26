"use strict";
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var path_1 = require('path');
function writeFileFromContent(_a) {
    var to = _a.to, content = _a.content, dir = _a.dir;
    var toAbs = path_1.join(dir, to);
    createFolders({ dir: dir, to: to }).then(function () {
        fs_1.writeFile(toAbs, content, function (writeErr) {
            if (writeErr) {
                console.log("Error: tried but failed to write to " + toAbs + " with: " + content, writeErr);
            }
            console.log('wrote file: ', toAbs);
        });
    });
}
exports.writeFileFromContent = writeFileFromContent;
function writeFileFromFile(_a) {
    var to = _a.to, from = _a.from, dir = _a.dir, tutorialDir = _a.tutorialDir;
    var toAbs = path_1.join(dir, to);
    var fromAbs = path_1.join(tutorialDir, from);
    createFolders({ dir: dir, to: to }).then(function () {
        fs_1.readFile(fromAbs, 'utf8', function (readErr, data) {
            var err = "Error: tried to write '" + fromAbs + "' to '" + toAbs + "' but failed.";
            if (readErr) {
                console.log(err, readErr);
            }
            fs_1.writeFile(toAbs, data, function (writeErr) {
                if (err, writeErr) {
                    console.log(writeErr);
                }
                console.log("wrote file contents of " + to + " to " + from);
            });
        });
    });
}
exports.writeFileFromFile = writeFileFromFile;
function createFolders(_a) {
    var dir = _a.dir, to = _a.to;
    return new Promise(function (resolve, reject) {
        var folders = to.split('/').slice(0, -1);
        if (folders.length === 0) {
            resolve();
        }
        else {
            var current_1 = [];
            folders.forEach(function (x) {
                current_1.push(x);
                var folderPath = path_1.join(dir, current_1.join('/'));
                if (!node_file_exists_1.default(folderPath)) {
                    fs_1.mkdirSync(folderPath);
                }
            });
            resolve();
        }
    });
}

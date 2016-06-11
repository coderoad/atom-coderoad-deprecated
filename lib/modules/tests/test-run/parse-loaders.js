"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var comments = {
    py: '#',
    js: '\/{2,3}',
};
function loaderRegex(fileType) {
    var comment = '\/{2,3}';
    if (comments[fileType]) {
        comment = comments[fileType];
    }
    return new RegExp("^" + comment + " ?load\\(['\"](.+)['\"](, ?true)?\\)", 'm');
}
function parseLoaders(data, fileType, tutorial, dir) {
    var i = -1;
    var lines = data.split('\n');
    var filesLoaded = [];
    var loaderMatch = loaderRegex(fileType);
    while (i < lines.length - 1) {
        i += 1;
        var loader = lines[i].match(loaderMatch);
        if (loader) {
            var fileToLoad = loader[1];
            if (filesLoaded.indexOf(fileToLoad) > -1) {
                console.log("\"" + fileToLoad + "\" already loaded.");
                continue;
            }
            var pathToFile = null;
            if (loader[2]) {
                pathToFile = path_1.normalize(path_1.join(tutorial.config.dir, fileToLoad));
            }
            else {
                pathToFile = path_1.normalize(path_1.join(dir, fileToLoad));
            }
            try {
                lines[i] = fs_1.readFileSync(pathToFile, 'utf8');
            }
            catch (e) {
                var message = 'File not found: ' + pathToFile;
                lines[i] = message;
                console.log(message);
            }
        }
    }
    return lines.join('\n');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLoaders;

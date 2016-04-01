"use strict";
var path = require('path');
var fs = require('fs');
var comments = {
    py: '#'
};
function loaderRegex(fileType) {
    var comment = '\/{2,3}';
    if (comments[fileType]) {
        comment = comments[fileType];
    }
    return new RegExp("^" + comment + " ?load\\(['\"](.+)['\"](,s?true)?\\)", 'm');
}
function parseLoaders(data, fileType) {
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
                pathToFile = path.normalize(path.join(window.coderoad.tutorialDir, fileToLoad));
            }
            else {
                pathToFile = path.normalize(path.join(window.coderoad.dir, fileToLoad));
            }
            lines[i] = fs.readFileSync(pathToFile, 'utf8');
        }
    }
    return lines.join('\n');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLoaders;

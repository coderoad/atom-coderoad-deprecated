"use strict";
var path = require('path');
var fs = require('fs');
var supportedFileTypes = ['js', 'jsx', 'ts', 'py'];
var js = /^\/\/\s?load\(['"`](.+)['"`](\,\s?true)?\)/m;
var loaderMatch = {
    js: js,
    ts: js,
    jsx: js,
    py: /^#\s?load\(['"`](.+)['"`](,\s?true)?\)/m
};
function parseLoaders(data, fileType) {
    if (supportedFileTypes.indexOf(fileType) < 0) {
        console.log("File type \"" + fileType + "\" not supported.");
        return '';
    }
    var i = -1;
    var lines = data.split('\n');
    var filesLoaded = [];
    while (i < lines.length - 1) {
        i += 1;
        var loader = lines[i].match(loaderMatch[fileType]);
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

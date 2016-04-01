"use strict";
var path = require('path');
var fs = require('fs');
var supportedFileTypes = ['js', 'jsx', 'ts', 'py'];
var js = /^\/\/\s?load\(['"`](.+)['"`]\)$/;
var loaderMatch = {
    js: js,
    ts: js,
    jsx: js,
    py: /\#\s?load\(['"`](.+)['"`]\)$/
};
function parseLoaders(data, fileType) {
    if (supportedFileTypes.indexOf(fileType) < 0) {
        console.log("File type \"" + fileType + "\" not supported.");
        return '';
    }
    var imports = '';
    var i = 0;
    var lines = data.split('\n');
    while (i < lines.length - 1) {
        i += 1;
        var loader = lines[i].match(loaderMatch[fileType]);
        if (loader) {
            var fileToLoad = loader[1];
            var pathToFile = path.normalize(path.join(window.coderoad.dir, fileToLoad));
            var file = fs.readFileSync(pathToFile, 'utf8');
            imports += file;
        }
    }
    var output = null;
    if (imports.length > 0) {
        output = imports + '\n'.concat(data);
    }
    else {
        output = data;
    }
    return output;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseLoaders;

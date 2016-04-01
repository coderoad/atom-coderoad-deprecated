"use strict";
var fs = require('fs');
var path = require('path');
var loaderMatch = {
    js: /^\/\/\s?load\(['"`](.+)['"`]\)$/,
    py: /\#\s?load\(['"`](.+)['"`]\)$/
};
function unlink(targetFile) {
    return new Promise(function (resolve) {
        if (fs.existsSync(targetFile)) {
            fs.unlink(targetFile);
        }
        resolve();
    });
}
function parseLoaders(data, fileType) {
    var lines = data.split('\n');
    var imports = '';
    var i = 0;
    while (i < lines.length - 1) {
        i += 1;
        var loader = lines[i].match(loaderMatch[fileType]);
        if (loader) {
            var fileToLoad = loader[1];
            var pathToFile = path.normalize(path.join(window.coderoad.dir, fileToLoad));
            imports.concat(fs.readFileSync(pathToFile, 'utf8'));
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
function readAppend(targetFile, file) {
    try {
        var data = fs.readFileSync(file, 'utf8');
        var fileType = targetFile.substr(targetFile.lastIndexOf('.') + 1, targetFile.length);
        var output = parseLoaders(data, fileType);
        fs.appendFileSync(targetFile, output, 'utf8');
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

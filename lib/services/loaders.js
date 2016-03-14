"use strict";
var vm = require('vm');
var fs = require('fs');
var path = require('path');
function load(pathToContext) {
    var absPath = path.join(process.env.DIR, pathToContext);
    var context = fs.readFileSync(absPath, 'utf8');
    vm.runInThisContext(context);
}
function getLoaders() {
    window.load = load;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getLoaders;

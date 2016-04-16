"use strict";
var _types_1 = require('./_types');
function globalsSet(packageJson) {
    return { type: _types_1.GLOBALS_SET, payload: { packageJson: packageJson } };
}
exports.globalsSet = globalsSet;

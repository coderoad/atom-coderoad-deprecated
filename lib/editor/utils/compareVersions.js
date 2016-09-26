"use strict";
function matchVersions(v) {
    return v.match(/([0-9]+)\.([0-9]+)/);
}
function isAboveVersion(a, b) {
    if (a === b) {
        return true;
    }
    var a_components = a.split('.');
    var b_components = b.split('.');
    var len = Math.min(a_components.length, b_components.length);
    for (var i = 0; i < len; i++) {
        var first = parseInt(a_components[i], 10);
        var second = parseInt(b_components[i], 10);
        if (first > second) {
            return true;
        }
        if (first < second) {
            return false;
        }
    }
    if (a_components.length > b_components.length) {
        return true;
    }
    if (a_components.length < b_components.length) {
        return false;
    }
    return true;
}
exports.isAboveVersion = isAboveVersion;
//# sourceMappingURL=compareVersions.js.map
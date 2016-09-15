"use strict";
var compareVersions_1 = require('../../utils/compareVersions');
var fetch_1 = require('../../utils/fetch');
var npmApiCall = function (name) { return ("https://registry.npmjs.org/" + name); };
function isLatestVersion(_a) {
    var name = _a.name, version = _a.version;
    return (fetch_1.default(npmApiCall(name))
        .then(function (res) {
        if (res) {
            var latest = JSON.parse(res)['dist-tags'].latest;
            return compareVersions_1.isAboveVersion(version, latest);
        }
        return false;
    }));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isLatestVersion;

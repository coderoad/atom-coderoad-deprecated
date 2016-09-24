"use strict";
var store_1 = require('../../../store');
var compareVersions_1 = require('../../../utils/compareVersions');
var fetch_1 = require('../../../utils/fetch');
var actions_1 = require('../actions');
var npmApiCall = function (name) { return ("https://registry.npmjs.org/" + name); };
function getLatest(version, data) {
    return data['dist-tags'].latest;
}
function isLatestVersion(_a) {
    var name = _a.name, version = _a.version;
    window.fetch(npmApiCall(name))
        .then(fetch_1.status)
        .then(fetch_1.json)
        .then(getLatest.bind(this, version))
        .then(function (latest) {
        if (!compareVersions_1.isAboveVersion(version, latest)) {
            store_1.default.dispatch(actions_1.tutorialVersion({ name: name, latest: latest }));
        }
    })
        .catch(function (err) { return console.log("Error fetching tutorial \"" + name + "\": " + err); });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isLatestVersion;
//# sourceMappingURL=latestVersion.js.map
"use strict";
var fetch_1 = require('../../utils/fetch');
var apiCall = function (name) { return ("https://registry.npmjs.org/" + name); };
function getLatestVersion(name, current) {
    return fetch_1.default(apiCall(name))
        .then(function (res) {
        if (res) {
            JSON.parse(res)['dist-tags'].latest;
            return true;
        }
        return false;
    });
}

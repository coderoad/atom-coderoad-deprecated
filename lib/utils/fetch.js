"use strict";
var fetch = function (url) {
    return new Promise(function (resolve, reject) {
        var lib = url.startsWith('https') ? require('https') : require('http');
        var request = lib.get(url, function (response) {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }
            var body = [];
            response.on('data', function (chunk) { return body.push(chunk); });
            response.on('end', function () { return resolve(body.join('')); });
        });
        request.on('error', function (err) { return reject(err); });
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fetch;

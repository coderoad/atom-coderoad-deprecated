"use strict";
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
}
exports.status = status;
function json(response) {
    return response.json();
}
exports.json = json;
//# sourceMappingURL=fetch.js.map
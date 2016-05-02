"use strict";
var _types_1 = require('./_types');
var position_1 = require('./position');
var store_1 = require('../store');
function progressLoad() {
    setTimeout(function () {
        store_1.default.dispatch(position_1.positionLoad());
    });
    return { type: _types_1.PROGRESS_LOAD };
}
exports.progressLoad = progressLoad;
function isTrue(x) {
    return x === true;
}
function completePage() {
    var position = store_1.default.getState().position;
    var progress = store_1.default.getState().progress;
    if (progress.pages.every(function (x) { return x.completed; })) {
        store_1.default.dispatch(completeTutorial());
    }
    return {
        payload: { position: position },
        type: _types_1.COMPLETE_PAGE,
    };
}
exports.completePage = completePage;
function completeTutorial() {
    return { type: _types_1.COMPLETE_TUTORIAL };
}
exports.completeTutorial = completeTutorial;

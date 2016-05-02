"use strict";
var _types_1 = require('./_types');
var page_1 = require('./page');
var store_1 = require('../store');
function progressLoad() {
    setTimeout(function () {
        store_1.default.dispatch(page_1.pagePositionLoad());
    });
    return { type: _types_1.PROGRESS_LOAD };
}
exports.progressLoad = progressLoad;
function isTrue(x) {
    return x === true;
}
function completePage() {
    var pagePosition = store_1.default.getState().pagePosition;
    var progress = store_1.default.getState().progress;
    if (progress.pages.every(function (x) { return x.completed; })) {
        store_1.default.dispatch(completeTutorial());
    }
    return {
        payload: { pagePosition: pagePosition },
        type: _types_1.COMPLETE_PAGE,
    };
}
exports.completePage = completePage;
function completeTutorial() {
    return { type: _types_1.COMPLETE_TUTORIAL };
}
exports.completeTutorial = completeTutorial;

"use strict";
var _types_1 = require('./_types');
var page_1 = require('./page');
function progressLoad() {
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: _types_1.PROGRESS_LOAD, payload: { tutorial: tutorial } });
        dispatch(page_1.pagePositionLoad());
    };
}
exports.progressLoad = progressLoad;
function completePage() {
    return function (dispatch, getState) {
        var _a = getState(), pagePosition = _a.pagePosition, progress = _a.progress, tutorial = _a.tutorial;
        if (progress.pages.every(function (x) { return x.completed; })) {
            dispatch(completeTutorial());
        }
        dispatch({ type: _types_1.COMPLETE_PAGE, payload: { pagePosition: pagePosition, tutorial: tutorial } });
    };
}
exports.completePage = completePage;
function completeTutorial() {
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: _types_1.COMPLETE_TUTORIAL, payload: { tutorial: tutorial } });
    };
}
exports.completeTutorial = completeTutorial;

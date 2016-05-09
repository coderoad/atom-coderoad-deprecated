"use strict";
var _types_1 = require('./_types');
function progressPagePositionLoad() {
    return function (dispatch, getState) {
        var progress = getState().progress;
        dispatch({ type: _types_1.PROGRESS_PAGE_POSITION_LOAD, payload: { progress: progress } });
    };
}
exports.progressPagePositionLoad = progressPagePositionLoad;
function progressLoad() {
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: _types_1.PROGRESS_LOAD, payload: { tutorial: tutorial } });
        dispatch(progressPagePositionLoad());
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

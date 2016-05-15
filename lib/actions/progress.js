"use strict";
var _types_1 = require('./_types');
var alert_1 = require('./alert');
var test_1 = require('./test');
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
        dispatch(test_1.testRun());
    };
}
exports.progressLoad = progressLoad;
function completePage(completed) {
    if (completed === void 0) { completed = true; }
    return function (dispatch, getState) {
        var _a = getState(), pagePosition = _a.pagePosition, progress = _a.progress, tutorial = _a.tutorial;
        dispatch({ type: _types_1.COMPLETE_PAGE, payload: { pagePosition: pagePosition, tutorial: tutorial, completed: completed } });
        if (completed) {
            if (progress.pages.every(function (x) { return x.completed; })) {
                dispatch(completeTutorial());
            }
            else {
                dispatch(alert_1.alertOpen({
                    message: "Page " + (pagePosition + 1) + " Complete",
                    action: 'PASS',
                }));
            }
        }
        else if (progress.completed) {
            dispatch(completeTutorial(false));
        }
    };
}
exports.completePage = completePage;
function completeTutorial(completed) {
    if (completed === void 0) { completed = true; }
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: _types_1.COMPLETE_TUTORIAL, payload: { tutorial: tutorial, completed: completed } });
        dispatch(alert_1.alertOpen({
            message: 'Tutorial Complete',
            action: 'PASS',
        }));
    };
}
exports.completeTutorial = completeTutorial;

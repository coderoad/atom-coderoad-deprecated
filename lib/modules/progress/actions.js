"use strict";
var actions_1 = require('../../actions');
var types_1 = require('./types');
function progressLoad() {
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: types_1.PROGRESS_LOAD, payload: { tutorial: tutorial } });
        dispatch(_progressPagePosition());
    };
}
exports.progressLoad = progressLoad;
function _progressPagePosition() {
    return function (dispatch, getState) {
        var progress = getState().progress;
        dispatch({ type: types_1.PROGRESS_PAGE_POSITION, payload: { progress: progress } });
    };
}
function progressCompletePage(completed) {
    if (completed === void 0) { completed = true; }
    return function (dispatch, getState) {
        var _a = getState(), pagePosition = _a.pagePosition, progress = _a.progress, tutorial = _a.tutorial;
        dispatch({ type: types_1.PROGRESS_COMPLETE_PAGE, payload: { pagePosition: pagePosition, tutorial: tutorial, completed: completed } });
        if (progress.completed || progress.pages.every(function (x) { return x.completed; })) {
            dispatch(progressCompleteTutorial());
        }
        else {
            dispatch(actions_1.alertOpen({
                message: "Page " + (pagePosition + 1) + " Complete",
                action: 'PASS',
            }));
        }
    };
}
exports.progressCompletePage = progressCompletePage;
function progressCompleteTutorial(completed) {
    if (completed === void 0) { completed = true; }
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: types_1.PROGRESS_COMPLETE_TUTORIAL, payload: { tutorial: tutorial, completed: completed } });
        dispatch(actions_1.alertOpen({
            message: 'Tutorial Complete',
            action: 'PASS',
        }));
    };
}
exports.progressCompleteTutorial = progressCompleteTutorial;
function progressReset() {
    return function (dispatch, getState) {
        var tutorial = getState().tutorial;
        dispatch({ type: types_1.PROGRESS_RESET, payload: { tutorial: tutorial } });
    };
}
exports.progressReset = progressReset;
//# sourceMappingURL=actions.js.map
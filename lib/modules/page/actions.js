"use strict";
var types_1 = require('./types');
var actions_1 = require('../../actions');
var actions_2 = require('../../actions');
exports.editorOpen = actions_2.editorOpen;
exports.editorSave = actions_2.editorSave;
exports.editorSet = actions_2.editorSet;
exports.editorInsert = actions_2.editorInsert;
function pageNext() {
    return function (dispatch, getState) {
        var pagePosition = getState().pagePosition;
        dispatch(pageSet(pagePosition + 1));
    };
}
exports.pageNext = pageNext;
function pageSet(pagePosition) {
    if (pagePosition === void 0) { pagePosition = 0; }
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, progress = _a.progress, tutorial = _a.tutorial, route = _a.route;
        if (pagePosition >= progress.pages.length) {
            return dispatch(actions_1.routeSet('final'));
        }
        dispatch(actions_1.hintPositionSet(0));
        var tasks = tutorial.pages[pagePosition].tasks || [];
        dispatch({
            type: types_1.PAGE_SET, payload: { dir: dir, pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
    };
}
exports.pageSet = pageSet;

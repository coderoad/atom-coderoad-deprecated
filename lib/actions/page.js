"use strict";
var _types_1 = require('./_types');
var index_1 = require('./index');
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
            return dispatch(index_1.routeSet('final'));
        }
        dispatch(index_1.hintPositionSet(0));
        var tasks = tutorial.pages[pagePosition].tasks || [];
        dispatch({
            type: _types_1.PAGE_SET, payload: { dir: dir, pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
    };
}
exports.pageSet = pageSet;

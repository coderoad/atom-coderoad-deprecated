"use strict";
var _types_1 = require('./_types');
var hint_1 = require('./hint');
function pageNext() {
    return function (dispatch, getState) {
        var _a = getState(), pagePosition = _a.pagePosition, tutorial = _a.tutorial;
        var pages = tutorial.pages;
        if (pagePosition >= pages.length - 1) {
            dispatch({ type: _types_1.ROUTE_SET, payload: { route: 'final' } });
        }
        else {
            pagePosition += 1;
            dispatch(pageSet(pagePosition));
        }
    };
}
exports.pageNext = pageNext;
function pageSet(pagePosition) {
    if (pagePosition === void 0) { pagePosition = 0; }
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, progress = _a.progress, tutorial = _a.tutorial, route = _a.route;
        if (pagePosition >= progress.pages.length) {
            dispatch({ type: _types_1.ROUTE_SET, payload: { route: 'final' } });
        }
        dispatch(hint_1.hintPositionSet(0));
        var tasks = tutorial.pages[pagePosition].tasks || [];
        dispatch({
            type: _types_1.PAGE_SET, payload: { dir: dir, pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
    };
}
exports.pageSet = pageSet;

"use strict";
var _types_1 = require('./_types');
var config_task_tests_1 = require('./config-task-tests');
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
        var _a = getState(), dir = _a.dir, progress = _a.progress, tutorial = _a.tutorial;
        var tasks = config_task_tests_1.default(dir, tutorial, tutorial.pages[pagePosition].tasks || []);
        if (pagePosition >= progress.pages.length) {
            dispatch({ type: _types_1.ROUTE_SET, payload: { route: 'final' } });
        }
        dispatch({
            type: _types_1.PAGE_SET, payload: { dir: dir, pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
    };
}
exports.pageSet = pageSet;
function pagePositionLoad() {
    return function (dispatch, getState) {
        var progress = getState().progress;
        dispatch({ type: _types_1.PAGE_POSITION_LOAD, payload: { progress: progress } });
    };
}
exports.pagePositionLoad = pagePositionLoad;
function pagePositionSet(pagePosition) {
    return { type: _types_1.PAGE_POSITION_SET, payload: { pagePosition: pagePosition } };
}
exports.pagePositionSet = pagePositionSet;

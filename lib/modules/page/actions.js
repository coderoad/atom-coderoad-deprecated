"use strict";
var types_1 = require('./types');
var actions_1 = require('../../actions');
var selectors_1 = require('../../selectors');
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
        var state = getState();
        var progress = state.progress, tutorial = state.tutorial, route = state.route;
        if (pagePosition >= progress.pages.length) {
            return dispatch(actions_1.routeSet('final'));
        }
        dispatch(actions_1.hintPositionSet(0));
        var tasks = selectors_1.tasksSelector(state) || [];
        dispatch({
            type: types_1.PAGE_SET, payload: { pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
    };
}
exports.pageSet = pageSet;

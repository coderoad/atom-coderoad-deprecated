"use strict";
var actions_1 = require('../../actions');
var types_1 = require('./types');
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
        var tasks = tutorial.pages[pagePosition].tasks || [];
        dispatch({
            type: types_1.PAGE_SET, payload: { pagePosition: pagePosition, tutorial: tutorial, progress: progress, tasks: tasks }
        });
        dispatch(actions_1.testLoad());
    };
}
exports.pageSet = pageSet;
//# sourceMappingURL=actions.js.map
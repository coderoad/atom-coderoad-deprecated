"use strict";
var actionTypes_1 = require('./actionTypes');
var store_1 = require('../store/store');
var tutorial_package_1 = require('../services/tutorial-package');
function setPage(selectedPosition) {
    if (selectedPosition === void 0) { selectedPosition = { chapter: 0, page: 0 }; }
    if (selectedPosition.completed) {
        return { type: actionTypes_1.SET_ROUTE, payload: { route: 'final' } };
    }
    var page = tutorial_package_1.default.getPage(selectedPosition);
    var tasks = tutorial_package_1.default.getTasks(selectedPosition);
    var taskTests = [].concat.apply([], tasks.map(function (task) { return task.tests || []; }));
    var actions = tasks.map(function (task) { return task.actions || []; });
    return { type: actionTypes_1.SET_PAGE, payload: { page: page, tasks: tasks, position: selectedPosition, taskTests: taskTests, actions: actions } };
}
exports.setPage = setPage;
function nextPage() {
    var position = store_1.store.getState().position;
    var nextPosition = tutorial_package_1.default.getNextPosition(position);
    return setPage(nextPosition);
}
exports.nextPage = nextPage;

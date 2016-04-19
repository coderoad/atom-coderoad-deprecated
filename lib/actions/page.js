"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
var tutorial_package_1 = require('../services/tutorial-package');
function pageNext() {
    var position = store_1.store.getState().position;
    var nextPosition = tutorial_package_1.default.getNextPosition(position);
    return pageSet(nextPosition);
}
exports.pageNext = pageNext;
function pageSet(selectedPosition) {
    if (selectedPosition === void 0) { selectedPosition = { chapter: 0, page: 0 }; }
    if (selectedPosition.completed) {
        return { type: _types_1.ROUTE_SET, payload: { route: 'final' } };
    }
    var page = tutorial_package_1.default.getPage(selectedPosition);
    var tasks = tutorial_package_1.default.getTasks(selectedPosition);
    var taskTests = [].concat.apply([], tasks.map(function (task) { return task.tests || []; }));
    var actions = tasks.map(function (task) { return task.actions || []; });
    return { type: _types_1.PAGE_SET, payload: { page: page, tasks: tasks, position: selectedPosition, taskTests: taskTests, actions: actions } };
}
exports.pageSet = pageSet;

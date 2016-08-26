"use strict";
var reselect_1 = require('reselect');
var tasks_1 = require('./tasks');
exports.hintsSelector = reselect_1.createSelector(tasks_1.currentTaskSelector, function (task) { return task && task.hints ? task.hints : []; });
exports.hintSelector = reselect_1.createSelector(exports.hintsSelector, function (state) { return state.hintPosition; }, function (hints, hintPosition) { return (hintPosition >= 0 && hints && hints.length) ?
    hints[hintPosition] : null; });

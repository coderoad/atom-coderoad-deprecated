"use strict";
var React = require('react');
var colors_1 = require('material-ui/styles/colors');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
exports.TaskCheckbox = function (_a) {
    var index = _a.index, taskPosition = _a.taskPosition, testRun = _a.testRun;
    var icon = null;
    console.log(index, taskPosition, testRun);
    if (index < taskPosition) {
        icon = React.createElement(check_box_1.default, {color: colors_1.green500});
    }
    else if (index === taskPosition && testRun) {
        icon = React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500});
    }
    else {
        icon = React.createElement(check_box_outline_blank_1.default, null);
    }
    return React.createElement("span", {className: 'cr-task-checkbox'}, icon);
};

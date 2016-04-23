"use strict";
var React = require('react');
var colors_1 = require('material-ui/styles/colors');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
var styles = {
    position: 'absolute',
    top: '15px'
};
function taskCheckbox(currentTask, testRun) {
    if (!currentTask || !testRun) {
        return null;
    }
    return (React.createElement("span", {style: styles}, React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500})));
}
exports.taskCheckbox = taskCheckbox;
;

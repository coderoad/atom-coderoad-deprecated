"use strict";
var React = require('react');
var colors_1 = require('material-ui/styles/colors');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var play_circle_filled_1 = require('material-ui/svg-icons/av/play-circle-filled');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
function progressIcon(isCompleted, current) {
    if (isCompleted) {
        return React.createElement(check_box_1.default, {style: { fill: colors_1.green300 }});
    }
    else if (current) {
        return React.createElement(play_circle_filled_1.default, {style: { fill: colors_1.pink500 }});
    }
    else {
        return React.createElement(check_box_outline_blank_1.default, null);
    }
}
exports.progressIcon = progressIcon;
;

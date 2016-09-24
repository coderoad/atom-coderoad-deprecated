"use strict";
var React = require('react');
var colors_1 = require('material-ui/styles/colors');
var play_circle_filled_1 = require('material-ui/svg-icons/av/play-circle-filled');
var check_box_1 = require('material-ui/svg-icons/toggle/check-box');
var check_box_outline_blank_1 = require('material-ui/svg-icons/toggle/check-box-outline-blank');
function progressIcon(pages, index, pagePosition) {
    switch (true) {
        case pages[pagePosition]:
            return React.createElement(check_box_1.default, {style: { fill: colors_1.green300 }});
        case index === pagePosition:
            return React.createElement(play_circle_filled_1.default, {style: { fill: colors_1.pink500 }});
        default:
            return React.createElement(check_box_outline_blank_1.default, null);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progressIcon;
//# sourceMappingURL=progressIcon.js.map
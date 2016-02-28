"use strict";
var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils/color-manipulator');
var spacing_1 = require('material-ui/lib/styles/spacing');
var zIndex_1 = require('material-ui/lib/styles/zIndex');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    spacing: spacing_1.default,
    zIndex: zIndex_1.default,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.teal400,
        primary2Color: Colors.teal700,
        primary3Color: Colors.lightBlack,
        accent1Color: Colors.pinkA200,
        accent2Color: Colors.grey100,
        accent3Color: Colors.grey500,
        textColor: Colors.darkBlack,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.cyan500
    }
};

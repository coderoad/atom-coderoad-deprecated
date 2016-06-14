"use strict";
var types_1 = require('./types');
var core_coderoad_1 = require('core-coderoad');
function tutorialSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_SET, payload: { name: name, dir: dir } });
        dispatch(core_coderoad_1.routeSet('progress'));
    };
}
exports.tutorialSet = tutorialSet;

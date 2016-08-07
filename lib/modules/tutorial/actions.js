"use strict";
var types_1 = require('./types');
var core_coderoad_1 = require('core-coderoad');
function tutorialSet(_a) {
    var name = _a.name, version = _a.version;
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_SET, payload: { name: name, dir: dir, version: version } });
        dispatch(core_coderoad_1.routeSet('progress'));
    };
}
exports.tutorialSet = tutorialSet;

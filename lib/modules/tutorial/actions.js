"use strict";
var types_1 = require('./types');
var route_1 = require('core-coderoad/lib/route');
function tutorialSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_SET, payload: { name: name, dir: dir } });
        dispatch(route_1.routeSet('progress'));
    };
}
exports.tutorialSet = tutorialSet;

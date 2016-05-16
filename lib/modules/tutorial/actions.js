"use strict";
var types_1 = require('./types');
var actions_1 = require('../../actions');
function tutorialSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_SET, payload: { name: name, dir: dir } });
        dispatch(actions_1.progressLoad());
        dispatch(actions_1.routeSet('progress'));
    };
}
exports.tutorialSet = tutorialSet;

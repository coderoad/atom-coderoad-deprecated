"use strict";
var actions_1 = require('../../actions');
var types_1 = require('./types');
function tutorialSet(_a) {
    var name = _a.name, version = _a.version;
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_SET, payload: { name: name, dir: dir, version: version } });
        dispatch(actions_1.routeSet('progress'));
    };
}
exports.tutorialSet = tutorialSet;
//# sourceMappingURL=actions.js.map
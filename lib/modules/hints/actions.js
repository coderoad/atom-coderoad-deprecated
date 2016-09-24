"use strict";
var types_1 = require('./types');
function hintPositionSet(hintPosition) {
    return { type: types_1.HINT_POSITION_SET, payload: { hintPosition: hintPosition } };
}
exports.hintPositionSet = hintPositionSet;
//# sourceMappingURL=actions.js.map
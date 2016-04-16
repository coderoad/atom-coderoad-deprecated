"use strict";
var _types_1 = require('./_types');
function positionSet(position) {
    return { type: _types_1.POSITION_SET, payload: { position: position } };
}
exports.positionSet = positionSet;

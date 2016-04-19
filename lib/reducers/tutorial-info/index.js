"use strict";
var _types_1 = require('../../actions/_types');
var tutorial_package_1 = require('../../services/tutorial-package');
var _info = {
    title: '',
    description: ''
};
function projectReducer(info, action) {
    if (info === void 0) { info = _info; }
    switch (action.type) {
        case _types_1.TUTORIAL_SET:
            return tutorial_package_1.default.getTutorialInfo();
        default:
            return info;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = projectReducer;

"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var tutorial_package_1 = require('../../services/tutorial-package');
var defaultInfo = {
    title: '',
    description: ''
};
function projectReducer(info, action) {
    if (info === void 0) { info = defaultInfo; }
    switch (action.type) {
        case actionTypes_1.SET_TUTORIAL_INFO:
            return tutorial_package_1.default.getTutorialInfo();
        default:
            return info;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = projectReducer;

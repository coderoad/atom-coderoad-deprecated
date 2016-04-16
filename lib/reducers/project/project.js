"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var tutorial_package_1 = require('../../services/tutorial-package');
var defaultProject = {
    title: '',
    description: ''
};
function projectReducer(project, action) {
    if (project === void 0) { project = defaultProject; }
    switch (action.type) {
        case actionTypes_1.SET_PROJECT:
            return tutorial_package_1.default.getProject();
        default:
            return project;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = projectReducer;

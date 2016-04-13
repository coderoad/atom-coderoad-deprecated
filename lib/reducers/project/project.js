"use strict";
var Type = require('../../actions/actionTypes');
var package_1 = require('../../services/package');
var defaultProject = {
    title: '',
    description: ''
};
function projectReducer(project, action) {
    if (project === void 0) { project = defaultProject; }
    switch (action.type) {
        case Type.SET_PROJECT:
            return package_1.default.getProject();
        default:
            return project;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = projectReducer;

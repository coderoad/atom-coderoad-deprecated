'use strict';
var Type = require('./actionTypes');
var _base_1 = require('../_base');
var package_1 = require('../services/package');
function setProject() {
    return { type: Type.SET_PROJECT };
}
exports.setProject = setProject;
function setProgress() {
    return { type: Type.SET_PROGRESS };
}
exports.setProgress = setProgress;
function setRoute(route) {
    return { type: Type.SET_ROUTE, payload: { route: route } };
}
exports.setRoute = setRoute;
function setPosition(position) {
    return { type: Type.SET_POSITION, payload: { position: position } };
}
exports.setPosition = setPosition;
function loadTutorial(name) {
    package_1.default.selectPackage(name);
    _base_1.store.dispatch(setProject());
    _base_1.store.dispatch(setPosition({ chapter: 0, page: 0 }));
    _base_1.store.dispatch(setProgress());
}
exports.loadTutorial = loadTutorial;
function toggleLog() {
    var open = !_base_1.store.getState().log.open;
    return { type: Type.TOGGLE_LOG, payload: { open: open } };
}
exports.toggleLog = toggleLog;
function logMessage(message) {
    return { type: Type.LOG_MESSAGE, payload: { message: message } };
}
exports.logMessage = logMessage;
var page_actions_1 = require('./page-actions');
exports.setPage = page_actions_1.setPage;
exports.nextPage = page_actions_1.nextPage;
var progress_actions_1 = require('./progress-actions');
exports.pageComplete = progress_actions_1.pageComplete;
exports.chapterComplete = progress_actions_1.chapterComplete;
exports.projectComplete = progress_actions_1.projectComplete;
var task_actions_1 = require('./task-actions');
exports.showHint = task_actions_1.showHint;
exports.runTests = task_actions_1.runTests;
exports.testComplete = task_actions_1.testComplete;
exports.testResult = task_actions_1.testResult;
exports.setHintPosition = task_actions_1.setHintPosition;
var tutorials_1 = require('./tutorials');
exports.loadTutorials = tutorials_1.loadTutorials;
var alert_1 = require('./alert');
exports.toggleAlert = alert_1.toggleAlert;
exports.replayAlert = alert_1.replayAlert;

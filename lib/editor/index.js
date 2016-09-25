"use strict";
var action = require('./actions');
var directory_1 = require('./directory');
var grammar_1 = require('./grammar');
var setup_1 = require('./setup');
var subscriptions_1 = require('./subscriptions');
var ui_1 = require('./ui');
var editor = {
    action: action,
    directory: directory_1.directory,
    name: setup_1.name,
    getGrammar: grammar_1.getGrammar,
    tokenizeLines: grammar_1.tokenizeLines,
    isAboveMinVersion: setup_1.isAboveMinVersion,
    version: {
        label: setup_1.versionLabel,
        failMessage: setup_1.versionFailMessage,
    },
    issuesPath: setup_1.issuesPath,
    minVersion: setup_1.minVersion,
    Subscriptions: subscriptions_1.default,
    addRightPanel: ui_1.addRightPanel,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;
//# sourceMappingURL=index.js.map
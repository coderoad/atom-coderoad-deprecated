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
    editorMinVersion: setup_1.editorMinVersion,
    editorVersionLabel: setup_1.editorVersionLabel,
    editorVersionFailMessage: setup_1.editorVersionFailMessage,
    editorIssuesPath: setup_1.editorIssuesPath,
    minVersion: setup_1.minVersion,
    Subscriptions: subscriptions_1.default,
    addRightPanel: ui_1.addRightPanel,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;
//# sourceMappingURL=index.js.map
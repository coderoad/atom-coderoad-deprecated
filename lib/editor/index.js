"use strict";
var action = require("./actions");
var directory_1 = require("./utils/directory");
var grammar_1 = require("./utils/grammar");
var setup_1 = require("./utils/setup");
var subscriptions_1 = require("./utils/subscriptions");
var ui_1 = require("./utils/ui");
var editor = {
    action: action,
    directory: directory_1.directory,
    name: setup_1.name,
    grammar: {
        getFromScope: grammar_1.getFromScope,
        tokenizeLines: grammar_1.tokenizeLines,
    },
    version: {
        minVersion: setup_1.minVersion,
        label: setup_1.versionLabel,
        failMessage: setup_1.versionFailMessage,
        isAboveMinVersion: setup_1.isAboveMinVersion,
    },
    issuesPath: setup_1.issuesPath,
    Subscriptions: subscriptions_1.default,
    addRightPanel: ui_1.addRightPanel,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;
//# sourceMappingURL=index.js.map
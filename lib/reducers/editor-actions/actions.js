"use strict";
var editor_1 = require('../../atom/editor');
var action_helpers_1 = require('./action-helpers');
var Type = {
    OPEN: 'open',
    SET: 'set',
    INSERT: 'insert',
    OPEN_CONSOLE: 'openConsole',
};
function editorActions(actionString) {
    return new Promise(function (resolve, reject) {
        var command = action_helpers_1.getCommand(actionString);
        var params = action_helpers_1.getParams(actionString);
        switch (command) {
            case Type.OPEN:
                var _a = action_helpers_1.getOptions(params[0]), param = _a.param, options = _a.options;
                if (params.length === 1) {
                    editor_1.open(param, options);
                    setTimeout(function () {
                        resolve(true);
                    }, 100);
                }
                break;
            case Type.SET:
                if (params.length === 1) {
                    var content_1 = params[0];
                    setTimeout(function () {
                        editor_1.set(content_1);
                        resolve(true);
                    });
                }
                break;
            case Type.INSERT:
                if (params.length === 1) {
                    var content = params[0];
                    editor_1.insert(content, {});
                    setTimeout(function () {
                        resolve(true);
                    });
                }
                break;
            case Type.OPEN_CONSOLE:
                if (params.length === 0) {
                    editor_1.openDevTools();
                    setTimeout(function () {
                        resolve(true);
                    });
                }
                break;
            default:
                console.log('Invalid editor action command');
                reject(false);
        }
    }).catch(function (err) {
        console.error('Error with editor', err);
    });
}
exports.editorActions = editorActions;

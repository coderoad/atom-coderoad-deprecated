"use strict";
var editor_1 = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var action_helpers_1 = require('./action-helpers');
var Type = {
    OPEN: 'open',
    SET: 'set',
    INSERT: 'insert',
    OPEN_CONSOLE: 'openConsole'
};
function editorActions(actionString) {
    return new Promise(function (resolve, reject) {
        var command = action_helpers_1.getCommand(actionString);
        var params = action_helpers_1.getParams(actionString);
        switch (command) {
            case Type.OPEN:
                var obj = action_helpers_1.getOptions(params[0]);
                var file = obj.param;
                var options = obj.options;
                if (params.length === 1) {
                    editor_1.open(file, options);
                    setTimeout(function () {
                        resolve();
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
                    var content_2 = params[0];
                    setTimeout(function () {
                        editor_1.insert(content_2, {});
                        resolve(true);
                    });
                }
                break;
            case Type.OPEN_CONSOLE:
                if (params.length === 0) {
                    setTimeout(function () {
                        actions_1.openDevTools();
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

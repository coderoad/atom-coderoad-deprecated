"use strict";
var Editor = require('../../atom/editor');
var actions_1 = require('../../atom/actions');
var action_helpers_1 = require('./action-helpers');
var Type = {
    open: 'open',
    set: 'set',
    insert: 'insert',
    openConsole: 'openConsole'
};
function editorActions(actionString) {
    return new Promise(function (resolve, reject) {
        var command = action_helpers_1.getCommand(actionString);
        var params = action_helpers_1.getParams(actionString);
        switch (command) {
            case Type.open:
                var obj = action_helpers_1.getOptions(params[0]);
                var file = obj.param;
                var options = obj.options;
                if (params.length === 1) {
                    Editor.open(file, options);
                    setTimeout(function () {
                        resolve();
                    }, 100);
                }
                break;
            case Type.set:
                if (params.length === 1) {
                    var content_1 = params[0];
                    setTimeout(function () {
                        Editor.set(content_1);
                        resolve(true);
                    });
                }
                break;
            case Type.insert:
                if (params.length === 1) {
                    var content_2 = params[0];
                    setTimeout(function () {
                        Editor.insert(content_2, {});
                        resolve(true);
                    });
                }
                break;
            case Type.openConsole:
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

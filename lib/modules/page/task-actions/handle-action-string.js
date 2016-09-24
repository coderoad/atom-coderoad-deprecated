"use strict";
var actions_1 = require('../../../actions');
var store_1 = require('../../../store');
var parser_1 = require('./parser');
var Type = {
    OPEN: 'open',
    SET: 'set',
    INSERT: 'insert',
    OPEN_CONSOLE: 'openConsole',
    WRITE: 'write',
    WRITE_FROM_FILE: 'writeFromFile',
};
function handleActionString(actionString) {
    return new Promise(function (resolve, reject) {
        if (typeof actionString !== 'string') {
            reject(actionString);
        }
        var command = parser_1.getCommand(actionString);
        var params = parser_1.getParams(actionString);
        switch (command) {
            case Type.OPEN:
                var obj = parser_1.getOptions(params[0]);
                var file = obj.param;
                var options = obj.options;
                if (params.length === 1) {
                    store_1.default.dispatch(actions_1.editorOpen(file, options));
                    resolve();
                }
                break;
            case Type.SET:
                if (params.length === 1) {
                    var content_1 = params[0];
                    setTimeout(function () {
                        store_1.default.dispatch(actions_1.editorSet(content_1));
                        resolve();
                    });
                }
                break;
            case Type.INSERT:
                if (params.length === 1) {
                    var content_2 = params[0];
                    setTimeout(function () {
                        store_1.default.dispatch(actions_1.editorInsert(content_2));
                        resolve();
                    });
                }
                break;
            case Type.WRITE:
            case Type.WRITE_FROM_FILE:
                if (params.length === 2) {
                    if (command === 'write') {
                        var to = params[0], content = params[1];
                        store_1.default.dispatch(actions_1.editorWriteFileFromContent(to, content));
                    }
                    else if (command === 'writeFromFile') {
                        var to = params[0], from = params[1];
                        store_1.default.dispatch(actions_1.editorWriteFileFromFile(to, from));
                    }
                    resolve();
                }
                reject('Invalid write params');
                break;
            default:
                console.log('Invalid editor action command');
                reject(false);
        }
    }).catch(function (err) {
        console.error('Error handling action string', err);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleActionString;
function isValidPath(filePath) {
    return !filePath.match(/^\.\./);
}
//# sourceMappingURL=handle-action-string.js.map
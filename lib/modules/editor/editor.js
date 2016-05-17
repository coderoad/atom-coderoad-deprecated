"use strict";
var index_1 = require('./index');
var parser_1 = require('./parser');
var Type = {
    OPEN: 'open',
    SET: 'set',
    INSERT: 'insert',
    OPEN_CONSOLE: 'openConsole',
};
function editorActionReducer(actionString) {
    return new Promise(function (resolve, reject) {
        var command = parser_1.getCommand(actionString);
        var params = parser_1.getParams(actionString);
        switch (command) {
            case Type.OPEN:
                var obj = parser_1.getOptions(params[0]);
                var file = obj.param;
                var options = obj.options;
                if (params.length === 1) {
                    index_1.open(file, options);
                    setTimeout(function () {
                        resolve();
                    }, 100);
                }
                break;
            case Type.SET:
                if (params.length === 1) {
                    var content_1 = params[0];
                    setTimeout(function () {
                        index_1.set(content_1);
                        resolve(true);
                    });
                }
                break;
            case Type.INSERT:
                if (params.length === 1) {
                    var content_2 = params[0];
                    setTimeout(function () {
                        index_1.insert(content_2, {});
                        resolve(true);
                    });
                }
                break;
            case Type.OPEN_CONSOLE:
                if (params.length === 0) {
                    setTimeout(function () {
                        index_1.openDevTools();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editorActionReducer;

"use strict";
var Editor = require('../../atom/editor');
var parser_1 = require('./parser');
var EditorAction = {
    open: 'open',
    set: 'set',
    insert: 'insert'
};
function getCommand(actionString) {
    var command = actionString.substring(0, actionString.indexOf('('));
    if (!command.length) {
        console.log('Error loading editor action command ', actionString);
    }
    else {
        return command;
    }
}
exports.getCommand = getCommand;
function getParams(actionString) {
    var command = getCommand(actionString);
    var params = actionString.substring(command.length + 1, actionString.length - 1);
    if (!params.length) {
        console.error('Error loading editor action params ', actionString);
        return null;
    }
    var paramsList = parser_1.parseParams.getParams(params);
    return paramsList;
}
exports.getParams = getParams;
function createObjectFromKeyValString(string) {
    var keyValList = string.split(/[:,]/);
    var obj = {};
    for (var i = 0; i < keyValList.length; i += 2) {
        var key = keyValList[i].trim();
        var val = keyValList[i + 1].trim();
        if (!val.match(/^["'].+["']$/)) {
            val = JSON.parse(val);
        }
        else {
            val = val.substring(1, val.length - 1);
        }
        obj[key] = val;
    }
    return obj;
}
function getOptions(paramString) {
    var hasOptions = paramString.match(/\{(.+)?\}/);
    var options = {};
    var param = paramString;
    if (!!hasOptions) {
        options = createObjectFromKeyValString(hasOptions[1]);
        param = paramString.split(/, ?{/)[0];
    }
    return {
        options: options,
        param: param
    };
}
exports.getOptions = getOptions;
function editorActions(actionString) {
    return new Promise(function (resolve, reject) {
        var command = getCommand(actionString);
        var params = getParams(actionString);
        switch (command) {
            case EditorAction.open:
                var obj = getOptions(params[0]);
                var file = obj.param;
                var options = obj.options;
                if (params.length === 1) {
                    Editor.open(file, options);
                    setTimeout(function () {
                        resolve();
                    }, 100);
                }
                break;
            case EditorAction.set:
                if (params.length === 1) {
                    var content_1 = params[0];
                    setTimeout(function () {
                        Editor.set(content_1);
                        resolve(true);
                    });
                }
                break;
            case EditorAction.insert:
                if (params.length === 1) {
                    var content_2 = params[0];
                    setTimeout(function () {
                        Editor.insert(content_2, {});
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
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;

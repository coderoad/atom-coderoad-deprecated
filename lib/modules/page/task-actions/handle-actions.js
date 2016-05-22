"use strict";
var handle_action_string_1 = require('./handle-action-string');
function handleTaskActions(actions) {
    var next = actions.shift();
    if (next && next.length) {
        next.reduce(function (total, curr) {
            return total.then(function () { return handle_action_string_1.default(curr); });
        }, Promise.resolve());
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleTaskActions;

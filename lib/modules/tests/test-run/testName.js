"use strict";
function getTestName(_a) {
    var tutorial = _a.tutorial, pagePosition = _a.pagePosition;
    if (!tutorial || !tutorial.name || !tutorial.version || typeof pagePosition !== 'number') {
        console.log('Error creating temporary test name');
    }
    return tutorial.name + "__" + tutorial.version + "__" + pagePosition;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTestName;

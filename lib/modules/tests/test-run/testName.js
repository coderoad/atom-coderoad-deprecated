"use strict";
var twoDigitify = function (n) { return n > 9 ? '' + n : '0' + n; };
function getTestName(_a) {
    var tutorial = _a.tutorial, pagePosition = _a.pagePosition;
    if (!tutorial || !tutorial.name || !tutorial.version || typeof pagePosition !== 'number') {
        console.log('Error creating temporary test name');
    }
    return tutorial.name + "__" + tutorial.version + "__" + twoDigitify(pagePosition + 1);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTestName;
//# sourceMappingURL=testName.js.map
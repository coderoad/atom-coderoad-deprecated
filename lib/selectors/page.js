"use strict";
exports.pageSelector = function (state) { return state.tutorial.pages[state.pagePosition]; };
exports.pageCompletedSelector = function (state) { return state.progress.pages[state.pagePosition]; };
exports.finalPageSelector = function (state) { return state.tutorial.final; };
//# sourceMappingURL=page.js.map
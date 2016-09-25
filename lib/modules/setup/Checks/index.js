"use strict";
var types_1 = require('../types');
var verify_1 = require('../utils/verify');
exports._checks = {
    passed: false,
    system: {
        node: false,
        npm: false,
        xcode: false,
        editor: false,
    },
    setup: {
        hasDir: false,
        hasPackageJson: false,
        hasTutorial: false,
    }
};
function checks(checks, action) {
    if (checks === void 0) { checks = exports._checks; }
    switch (action.type) {
        case types_1.SETUP_VERIFY:
            var _a = action.payload, dir = _a.dir, packageJson = _a.packageJson;
            return verify_1.default(dir, packageJson);
        default:
            return checks;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checks;
//# sourceMappingURL=index.js.map
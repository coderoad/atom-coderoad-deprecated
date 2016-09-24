"use strict";
var configureStore_1 = require('./options/configureStore');
var reducers_1 = require('./reducers');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore_1.default({
    reducer: reducers_1.default,
    devMode: false,
});
//# sourceMappingURL=store.js.map
"use strict";
var reselect_1 = require('reselect');
var tutorialConfig_1 = require('../options/tutorialConfig');
exports.languageSelector = function (state) {
    return state.packageJson && state.packageJson.config ?
        state.packageJson.config.language : null;
};
exports.languageSuffixSelector = reselect_1.createSelector(exports.languageSelector, function (language) {
    return tutorialConfig_1.default.hasOwnProperty(language) ?
        tutorialConfig_1.default[language].language.suffix : null;
});

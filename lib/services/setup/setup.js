"use strict";
var system_checks_1 = require('./system-checks');
var setup_checks_1 = require('./setup-checks');
var _base_1 = require('../../_base');
var Action = require('../../actions/actions');
function verifySetupComplete() {
    system_checks_1.npmVersionThreeOrLater()
        .then(setup_checks_1.hasDirectory)
        .then(setup_checks_1.hasPackageJson)
        .then(setup_checks_1.hasTutorialDep)
        .then(function () {
        _base_1.store.dispatch(Action.setupWarning(null));
        _base_1.store.dispatch(Action.loadTutorials());
    })
        .catch(function (warning) {
        _base_1.store.dispatch(Action.setupWarning(warning));
    });
}
exports.verifySetupComplete = verifySetupComplete;

"use strict";
exports.isWindows = window.navigator.appVersion.indexOf('Win') > -1 || false;
exports.isMac = !!navigator.platform.match(/Mac/);

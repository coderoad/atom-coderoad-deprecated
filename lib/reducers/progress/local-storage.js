"use strict";
var store_1 = require('../../store');
function getLocalStorageKey() {
    return 'coderoad:' + store_1.default.getState().tutorial.name;
}
function saveToLocalStorage(progress) {
    try {
        window.localStorage
            .setItem(getLocalStorageKey(), JSON.stringify(progress));
    }
    catch (e) {
        console.log('Error saving progress:', e);
    }
}
exports.saveToLocalStorage = saveToLocalStorage;
function loadProgressFromLocalStorage() {
    var savedProgress = JSON.parse(window.localStorage.getItem(getLocalStorageKey()) || null);
    if (savedProgress) {
        return savedProgress;
    }
    return null;
}
exports.loadProgressFromLocalStorage = loadProgressFromLocalStorage;

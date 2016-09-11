"use strict";
function getLocalStorageKey(tutorial) {
    return 'coderoad:' + tutorial.name;
}
exports.getLocalStorageKey = getLocalStorageKey;
function saveToLocalStorage(tutorial, progress) {
    try {
        window.localStorage
            .setItem(getLocalStorageKey(tutorial), JSON.stringify(progress));
    }
    catch (e) {
        throw new Error("Error saving progress. Invalid progress: " + progress + ". " + e);
    }
}
exports.saveToLocalStorage = saveToLocalStorage;
function loadProgressFromLocalStorage(tutorial) {
    var savedProgress = JSON.parse(window.localStorage.getItem(getLocalStorageKey(tutorial)) || null);
    if (savedProgress) {
        return savedProgress;
    }
    return null;
}
exports.loadProgressFromLocalStorage = loadProgressFromLocalStorage;

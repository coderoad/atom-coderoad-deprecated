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
    var item = window.localStorage.getItem(getLocalStorageKey(tutorial));
    var savedProgress;
    if (item) {
        savedProgress = JSON.parse(item);
    }
    if (savedProgress) {
        return savedProgress;
    }
    return null;
}
exports.loadProgressFromLocalStorage = loadProgressFromLocalStorage;
//# sourceMappingURL=local-storage.js.map
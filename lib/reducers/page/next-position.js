"use strict";
var store_1 = require('../../store');
var actions_1 = require('../../actions');
function getNextPosition(_a) {
    var chapter = _a.chapter, page = _a.page;
    var chapters = this.data.chapters;
    if (page < chapters[chapter].pages.length - 1) {
        return { chapter: chapter, page: page + 1 };
    }
    else if (chapter < chapters.length - 1) {
        return { chapter: chapter + 1, page: 0 };
    }
    else {
        store_1.store.dispatch(actions_1.completeTutorial());
        return { chapter: chapter, page: page, completed: true };
    }
}
exports.getNextPosition = getNextPosition;

"use strict";
var path_1 = require('path');
var actions_1 = require('../actions');
var store_1 = require('../store');
function configTestString(config, name, test) {
    if (window.coderoad.win) {
        test = test.split('/').join('\\');
    }
    if (config.testDir) {
        test = path_1.join(window.coderoad.dir, 'node_modules', name, config.testDir, test);
    }
    else {
        test = path_1.join(window.coderoad.dir, 'node_modules', name, test);
    }
    if (config.testSuffix) {
        test += config.testSuffix;
    }
    return test;
}
var TutorialPackageService = (function () {
    function TutorialPackageService() {
        this.name = '';
        this.data = {
            project: {},
            chapters: []
        };
        this.packageJson = null;
    }
    TutorialPackageService.prototype.get = function () {
        return this.packageJson;
    };
    TutorialPackageService.prototype.set = function (name) {
        var packagePath = path_1.join(window.coderoad.dir, 'node_modules', name);
        this.packageJson = require(path_1.join(packagePath, 'package.json'));
        store_1.store.dispatch(actions_1.globalsSet(this.packageJson));
        this.data = require(path_1.join(packagePath, this.packageJson.main));
        this.name = name;
    };
    TutorialPackageService.prototype.page = function (_a) {
        var chapter = _a.chapter, page = _a.page;
        return this.data.chapters[chapter].pages[page];
    };
    TutorialPackageService.prototype.configTaskTests = function (tasks) {
        var _this = this;
        var config = this.packageJson.config;
        return !tasks ? [] : tasks.map(function (task) {
            if (task.tests) {
                task.tests = task.tests.map(function (test) {
                    if (typeof test === 'string') {
                        return configTestString(config, _this.name, test);
                    }
                    else {
                        console.error('Invalid task test', test);
                    }
                });
            }
            return task;
        });
    };
    TutorialPackageService.prototype.getTasks = function (position) {
        var tasks = this.page(position).tasks || [];
        tasks = this.configTaskTests(tasks);
        return tasks;
    };
    TutorialPackageService.prototype.getPage = function (position) {
        var _a = this.page(position), title = _a.title, description = _a.description, onPageComplete = _a.onPageComplete, completed = _a.completed;
        return {
            title: title, description: description, onPageComplete: onPageComplete, completed: completed || false
        };
    };
    TutorialPackageService.prototype.getNextPosition = function (_a) {
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
    };
    TutorialPackageService.prototype.getTutorialInfo = function () {
        return this.data.project;
    };
    TutorialPackageService.prototype.getProgress = function () {
        var chapters = this.data.chapters;
        return {
            completed: false,
            chapters: !chapters ? [] : chapters.map(function (_a) {
                var title = _a.title, description = _a.description, completed = _a.completed, pages = _a.pages;
                return {
                    title: title, description: description, completed: completed || false,
                    pages: !pages ? [] : pages.map(function (page) {
                        return {
                            title: page.title,
                            description: page.description,
                            completed: page.completed || false
                        };
                    })
                };
            })
        };
    };
    return TutorialPackageService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new TutorialPackageService();

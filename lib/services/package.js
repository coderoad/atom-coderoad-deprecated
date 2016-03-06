"use strict";
var path = require('path');
var setGlobals_1 = require('./setGlobals');
var Action = require('../actions/actions');
var _base_1 = require('../_base');
var _ = require('lodash');
function configTestString(config, packageName, test) {
    if (config.testDir) {
        test = path.join(window.coderoad.dir, 'node_modules', packageName, config.testDir, test);
    }
    else {
        test = path.join(window.coderoad.dir, 'node_modules', packageName, test);
    }
    if (config.testSuffix) {
        test += config.testSuffix;
    }
    return test;
}
var PackageService = (function () {
    function PackageService() {
        this.packageName = '';
        this.data = {
            project: {},
            chapters: []
        };
        this.config = {};
    }
    PackageService.prototype.selectPackage = function (packageName) {
        var packagePath = path.join(window.coderoad.dir, 'node_modules', packageName);
        this.config = require(path.join(packagePath, 'package.json'));
        setGlobals_1.setGlobals(this.config);
        this.data = require(path.join(packagePath, this.config.main));
        this.packageName = packageName;
    };
    PackageService.prototype.page = function (_a) {
        var chapter = _a.chapter, page = _a.page;
        return _.cloneDeep(this.data.chapters[chapter].pages[page]);
    };
    PackageService.prototype.getConfig = function () {
        return this.config;
    };
    PackageService.prototype.configTaskTests = function (tasks) {
        var _this = this;
        var config = this.config.config;
        return !tasks ? [] : tasks.map(function (task) {
            if (task.tests) {
                task.tests = task.tests.map(function (tests) {
                    if (_.isString(tests)) {
                        return [].concat(configTestString(config, _this.packageName, tests));
                    }
                    else {
                        console.error('Invalid task test', tests);
                    }
                });
            }
            return task;
        });
    };
    PackageService.prototype.getTasks = function (position) {
        var tasks = this.page(position).tasks || [];
        tasks = this.configTaskTests(tasks);
        return tasks;
    };
    PackageService.prototype.getPage = function (position) {
        var _a = this.page(position), title = _a.title, description = _a.description, onPageComplete = _a.onPageComplete, completed = _a.completed;
        return {
            title: title, description: description, onPageComplete: onPageComplete, completed: completed || false
        };
    };
    PackageService.prototype.getSavedPosition = function () {
        return { chapter: 0, page: 0 };
    };
    PackageService.prototype.getSavedRoute = function () {
        return 'progress';
    };
    PackageService.prototype.getNextPosition = function (_a) {
        var chapter = _a.chapter, page = _a.page;
        var chapters = this.data.chapters;
        if (page < chapters[chapter].pages.length - 1) {
            return { chapter: chapter, page: page + 1 };
        }
        else if (chapter < chapters.length - 1) {
            return { chapter: chapter + 1, page: 0 };
        }
        else {
            _base_1.store.dispatch(Action.projectComplete());
            return { chapter: chapter, page: page };
        }
    };
    PackageService.prototype.getProject = function () {
        return this.data.project;
    };
    PackageService.prototype.getProgress = function () {
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
    return PackageService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new PackageService();

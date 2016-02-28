"use strict";
var path = require('path');
var setGlobals_1 = require('./setGlobals');
var Action = require('../actions/actions');
var _base_1 = require('../_base');
var _ = require('lodash');
function configTestString(config, packageName, test) {
    if (config.testDir) {
        test = path.join(global.coderoad.dir, 'node_modules', packageName, config.testDir, test);
    }
    else {
        test = path.join(global.coderoad.dir, 'node_modules', packageName, test);
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
        var packagePath = path.join(global.coderoad.dir, 'node_modules', packageName);
        this.config = require(path.join(packagePath, 'package.json'));
        setGlobals_1.setGlobals(this.config);
        this.data = require(path.join(packagePath, this.config.main));
        this.packageName = packageName;
    };
    PackageService.prototype.page = function (position) {
        var page = _.cloneDeep(this.data.chapters[position.chapter].pages[position.page]);
        return page;
    };
    PackageService.prototype.getConfig = function () {
        return this.config;
    };
    PackageService.prototype.configTaskTests = function (tasks) {
        var _this = this;
        var config = this.config.config;
        return !tasks ? [] : tasks.map(function (task) {
            task.tests = !task.tests ? [] : task.tests.map(function (tests) {
                if (_.isString(tests)) {
                    return [].concat(configTestString(config, _this.packageName, tests));
                }
                else {
                    console.error('Invalid task test', tests);
                }
            });
            return task;
        });
    };
    PackageService.prototype.getTasks = function (position) {
        var tasks = this.page(position).tasks || [];
        tasks = this.configTaskTests(tasks);
        return tasks;
    };
    PackageService.prototype.getPage = function (position) {
        var page = this.page(position);
        return {
            title: page.title,
            description: page.description,
            explanation: page.explanation,
            completed: page.completed || false,
        };
    };
    PackageService.prototype.getSavedPosition = function () {
        return { chapter: 0, page: 0 };
    };
    PackageService.prototype.getSavedRoute = function () {
        return 'progress';
    };
    PackageService.prototype.getNextPosition = function (position) {
        var chapters = this.data.chapters;
        if (position.page < chapters[position.chapter].pages.length - 1) {
            return { chapter: position.chapter, page: position.page + 1 };
        }
        else if (position.chapter < chapters.length - 1) {
            return { chapter: position.chapter + 1, page: 0 };
        }
        else {
            _base_1.store.dispatch(Action.projectComplete());
            return position;
        }
    };
    PackageService.prototype.getProject = function () {
        return this.data.project;
    };
    PackageService.prototype.getProgress = function () {
        var chapters = this.data.chapters;
        return {
            completed: false,
            chapters: !chapters ? [] : chapters.map(function (chapter) {
                return {
                    title: chapter.title,
                    description: chapter.description,
                    completed: chapter.completed || false,
                    pages: !chapter.pages ? [] : chapter.pages.map(function (page) {
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

"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var List_1 = require('material-ui/List');
var progressIcon_1 = require('./progressIcon');
var colors_1 = require('material-ui/styles/colors');
var ProgressPage = (function (_super) {
    __extends(ProgressPage, _super);
    function ProgressPage() {
        _super.apply(this, arguments);
    }
    ProgressPage.prototype.canActivate = function (isActive) {
        var _a = this.props, chapterIndex = _a.chapterIndex, pageIndex = _a.pageIndex, position = _a.position;
        var earlierChapter = chapterIndex < position.chapter;
        var currentChapter = chapterIndex === position.chapter;
        var earlierOrCurrentPage = pageIndex <= position.page;
        return isActive || earlierChapter ||
            (currentChapter && earlierOrCurrentPage);
    };
    ProgressPage.prototype.render = function () {
        var _a = this.props, page = _a.page, position = _a.position, chapterIndex = _a.chapterIndex, pageIndex = _a.pageIndex, selectPage = _a.selectPage;
        var isActive = chapterIndex === position.chapter && pageIndex === position.page;
        var canActivate = this.canActivate(isActive);
        return (React.createElement(List_1.ListItem, {className: 'page', style: !canActivate ? { color: colors_1.grey400 } : {}, primaryText: (pageIndex + 1) + ". " + page.title, secondaryText: canActivate ? page.description : '', leftIcon: progressIcon_1.progressIcon(page.completed, isActive), onClick: canActivate
            ? selectPage.bind(this, {
                chapter: chapterIndex,
                page: pageIndex
            })
            : function () { return; }}));
    };
    ;
    ProgressPage = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectPage: function (position) {
                    dispatch(actions_1.pageSet(position));
                    dispatch(actions_1.testsLoad());
                    dispatch(actions_1.setRoute('page'));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressPage);
    return ProgressPage;
}(React.Component));
exports.ProgressPage = ProgressPage;
;

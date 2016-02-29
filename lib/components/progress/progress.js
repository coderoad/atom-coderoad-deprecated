'use strict';
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
var Action = require('../../actions/actions');
var material_ui_1 = require('material-ui');
var Completed = require('material-ui/lib/svg-icons/toggle/check-box');
var Current = require('material-ui/lib/svg-icons/av/play-circle-filled');
var AllCompleted = require('material-ui/lib/svg-icons/action/done-all');
var Incomplete = require('material-ui/lib/svg-icons/toggle/check-box-outline-blank');
var ProgressPage = (function (_super) {
    __extends(ProgressPage, _super);
    function ProgressPage() {
        _super.apply(this, arguments);
    }
    ProgressPage.prototype.getProgressIcon = function (completed, current) {
        if (completed) {
            return React.createElement(Completed, null);
        }
        else if (current) {
            return React.createElement(Current, null);
        }
        else {
            return React.createElement(Incomplete, null);
        }
    };
    ProgressPage.prototype.getButton = function (isActive, itemPosition) {
        if (isActive && itemPosition.chapter === 0 && itemPosition.page === 0) {
            return React.createElement(material_ui_1.RaisedButton, {label: 'Start', primary: true, style: { height: '35px' }});
        }
        else if (isActive) {
            return React.createElement(material_ui_1.RaisedButton, {label: 'Continue', secondary: true, style: { height: '35px', width: '100px' }});
        }
        else {
            return null;
        }
    };
    ProgressPage.prototype.canActivate = function (isActive, itemPosition, position) {
        if (isActive && itemPosition.chapter <= position.chapter && itemPosition.page <= position.page) {
            return true;
        }
        else {
            return null;
        }
    };
    ProgressPage.prototype.render = function () {
        var page = this.props.page;
        var itemPosition = this.props.itemPosition;
        var position = this.props.position;
        var isActive = itemPosition.chapter === position.chapter && itemPosition.page === position.page;
        return (React.createElement(material_ui_1.ListItem, {key: itemPosition.page, className: classNames({
            'cr-page': true,
            'cr-page-isDisabled': !this.canActivate(isActive, itemPosition, position)
        }), primaryText: (itemPosition.page + 1) + ". " + page.title, secondaryText: page.description, secondaryTextLines: page.description.length > 50 ? 2 : 1, leftIcon: this.getProgressIcon(page.completed, isActive), rightIcon: this.getButton(isActive, itemPosition), onClick: this.canActivate(isActive, itemPosition, position) ? this.props.selectPage.bind(this, itemPosition) : null}));
    };
    ;
    ProgressPage = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectPage: function (position) {
                    dispatch(Action.setPage(position));
                    dispatch(Action.setRoute('page'));
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressPage);
    return ProgressPage;
}(React.Component));
;
var style = {
    height: '100%',
    width: '100%',
    margin: 0
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (_a) {
    var progress = _a.progress, position = _a.position;
    return (React.createElement(material_ui_1.Paper, {style: style, zDepth: 1, className: 'cr-progress'}, 
        React.createElement(material_ui_1.List, {subheader: 'Progress'}, progress.chapters.map(function (chapter, chapterIndex) {
            var isActive = chapterIndex === position.chapter;
            return React.createElement(material_ui_1.ListItem, {primaryText: (chapterIndex + 1) + ". " + chapter.title, className: classNames({
                'chapter': true,
                'isActive': isActive
            }), secondaryText: chapter.description, secondaryTextLines: chapter.description.length > 35 ? 2 : 1, initiallyOpen: chapterIndex === 0, leftIcon: chapter.completed ? React.createElement(AllCompleted, null) : null, primaryTogglesNestedList: chapterIndex === position.chapter && !chapter.completed, nestedItems: chapter.pages.map(function (page, pageIndex) {
                var itemPosition = { chapter: chapterIndex, page: pageIndex };
                return React.createElement(ProgressPage, {page: page, itemPosition: itemPosition, position: position});
            })});
        }))
    ));
};

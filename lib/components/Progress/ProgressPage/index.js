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
var actions_1 = require('../../../actions');
var List_1 = require('material-ui/List');
var progressIcon_1 = require('../progressIcon');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    paddingLeft: '15px',
    marginTop: '0px',
};
var ProgressPage = (function (_super) {
    __extends(ProgressPage, _super);
    function ProgressPage() {
        _super.apply(this, arguments);
    }
    ProgressPage.prototype.render = function () {
        var _a = this.props, page = _a.page, pagePosition = _a.pagePosition, index = _a.index, progress = _a.progress, selectPage = _a.selectPage;
        var canActivate = index <= pagePosition;
        return (React.createElement(List_1.ListItem, {key: index, style: Object.assign({}, styles, canActivate ? {} : { color: colors_1.grey400 }), primaryText: (index + 1) + ". " + page.title, secondaryText: page.description, leftIcon: progressIcon_1.default(progress.pages, pagePosition, index), onClick: canActivate
            ? selectPage.bind(this, index)
            : function () { return; }}));
    };
    ;
    ProgressPage = __decorate([
        react_redux_1.connect(null, function (dispatch) { return ({
            selectPage: function (pagePosition) {
                dispatch(actions_1.pageSet(pagePosition));
                dispatch(actions_1.routeSet('page'));
            },
        }); }), 
        __metadata('design:paramtypes', [])
    ], ProgressPage);
    return ProgressPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressPage;
;

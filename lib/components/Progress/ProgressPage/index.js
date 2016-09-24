"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../actions');
var progressIcon_1 = require('../progressIcon');
var List_1 = require('material-ui/List');
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
    ProgressPage.prototype.doNothing = function () {
        return;
    };
    ProgressPage.prototype.render = function () {
        var _a = this.props, page = _a.page, pagePosition = _a.pagePosition, index = _a.index, progress = _a.progress, selectPage = _a.selectPage;
        var canActivate = index <= pagePosition;
        return (React.createElement(List_1.ListItem, {key: index, style: Object.assign({}, styles, canActivate ? {} : { color: colors_1.grey400 }), primaryText: (index + 1) + ". " + page.title, secondaryText: page.description, leftIcon: progressIcon_1.default(progress.pages, pagePosition, index), onClick: canActivate ? selectPage.bind(this, index) : this.doNothing}));
    };
    ;
    return ProgressPage;
}(React.Component));
;
var mapStateToProps = function (state, props) { return ({
    progress: state.progress,
    pagePosition: state.pagePosition,
    page: props.page,
    index: props.index,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    selectPage: function (pagePosition) {
        dispatch(actions_1.pageSet(pagePosition));
        dispatch(actions_1.routeSet('page'));
    }
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
//# sourceMappingURL=index.js.map
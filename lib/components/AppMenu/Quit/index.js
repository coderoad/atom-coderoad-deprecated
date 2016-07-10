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
var MenuItem_1 = require('material-ui/MenuItem');
var styles = {
    menuItem: {
        textAlign: 'center',
        padding: '0px 2px',
    },
};
var Quit = (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        _super.apply(this, arguments);
    }
    Quit.prototype.render = function () {
        return (React.createElement(MenuItem_1.default, {style: styles.menuItem, key: 'quit', onClick: this.props.quit}, "quit"));
    };
    Quit = __decorate([
        react_redux_1.connect(null, { quit: actions_1.quit }), 
        __metadata('design:paramtypes', [])
    ], Quit);
    return Quit;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Quit;

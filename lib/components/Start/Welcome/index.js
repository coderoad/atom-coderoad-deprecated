"use strict";
var React = require('react');
var path_1 = require('path');
var index_1 = require('../../index');
var imagePath = path_1.join(__dirname, '../../../../', 'img', 'coderoad.jpg');
var styles = {
    backgroundImage: "url(\"" + imagePath + "\")",
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'inherit',
    height: '350px',
    textAlign: 'center',
    marginTop: '0px',
    textShadow: '1px 1px 1px #000',
};
var titleStyles = {
    paddingTop: '120px',
    color: 'white',
    fontSize: '2em'
};
var taglineStyles = {
    fontSize: '1.5em',
};
var buttonStyles = {
    fontSize: '1.4em',
    boxShadow: '2px 2px 1px #888888',
    textShadow: '1px 1px 0px #000',
};
var Welcome = function () { return (React.createElement("div", {style: styles, className: 'cr-bg'}, React.createElement("div", {style: titleStyles}, "CodeRoad"), React.createElement("div", {style: taglineStyles}, "Tutorials in your Editor"), React.createElement("br", null), React.createElement("br", null), React.createElement(index_1.RouteButton, {label: 'Start', route: 'tutorials', style: buttonStyles}))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;

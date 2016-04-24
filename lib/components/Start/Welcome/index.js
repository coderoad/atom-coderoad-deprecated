"use strict";
var React = require('react');
var path_1 = require('path');
var index_1 = require('../../index');
var imagePath = path_1.join(__dirname, '../../../../', 'img', 'coderoad.jpg');
var styles = {
    backgroundImage: "url(\"" + imagePath + "\")",
    backgroundRepeat: 'no-repeat',
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
    padding: '5px 2px',
    textShadow: '1px 1px 0px #000',
};
exports.Welcome = function () { return (React.createElement("div", {style: styles}, React.createElement("div", {style: titleStyles}, "CodeRoad"), React.createElement("div", {style: taglineStyles}, "Tutorials in your Editor"), React.createElement("br", null), React.createElement("br", null), React.createElement(index_1.RouteButton, {label: 'Start', route: 'tutorials', style: buttonStyles}))); };

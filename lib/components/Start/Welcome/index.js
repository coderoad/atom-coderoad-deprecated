"use strict";
var React = require('react');
var path_1 = require('path');
var index_1 = require('../../index');
var imagePath = path_1.resolve(__dirname, '../../../../', 'styles', 'coderoad.jpg');
var welcomeStyle = {
    backgroundImage: "url(\"" + imagePath + "\")",
    backgroundRepeat: 'no-repeat',
    height: '350px',
};
var welcomeButtonStyle = {
    fontSize: '1.4em',
    padding: '5px 2px',
    textShadow: '1px 1px 0px #000',
};
exports.Welcome = function () { return (React.createElement("div", {style: welcomeStyle}, React.createElement("div", {className: 'cr-welcome'}, React.createElement("div", {className: 'title'}, "CodeRoad"), React.createElement("div", {className: 'tagline'}, "Tutorials in your Editor"), React.createElement("br", null), React.createElement("br", null), React.createElement(index_1.RouteButton, {label: 'Start', route: 'tutorials', style: welcomeButtonStyle})))); };

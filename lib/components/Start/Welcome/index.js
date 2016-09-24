"use strict";
var path_1 = require('path');
var React = require('react');
var index_1 = require('../../index');
var styles = {
    header: {
        backgroundImage: '',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'inherit',
        height: '350px',
        textAlign: 'center',
        marginTop: '0px',
        textShadow: '1px 1px 1px #000',
    },
    title: {
        paddingTop: '120px',
        color: 'white',
        fontSize: '2em',
    },
    tagline: {
        fontSize: '1.5em',
    },
    button: {
        fontSize: '1.4em',
        boxShadow: '2px 2px 1px #888888',
        textShadow: '1px 1px 0px #000',
    },
};
if (!navigator.platform.match(/Win/)) {
    var imagePath = path_1.join(__dirname, '..', '..', '..', '..', 'img', 'coderoad.jpg');
    styles.header.backgroundImage = "url(" + imagePath + ")";
}
var Welcome = function (_a) {
    var title = _a.title, tagline = _a.tagline, firstRoute = _a.firstRoute;
    return (React.createElement("div", {style: styles.header, className: 'cr-bg'}, 
        React.createElement("div", {style: styles.title}, title), 
        React.createElement("div", {style: styles.tagline}, tagline), 
        React.createElement("br", null), 
        React.createElement("br", null), 
        React.createElement(index_1.RouteButton, {label: 'Start', route: firstRoute, style: styles.button})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;
//# sourceMappingURL=index.js.map
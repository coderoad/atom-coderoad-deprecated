"use strict";
var React = require('react');
var MenuLink_1 = require('./MenuLink');
function menuRightRouteOptions(route) {
    switch (route) {
        case 'final':
        case 'page':
            return (React.createElement("div", null, React.createElement(MenuLink_1.MenuLink, {route: 'progress'}), React.createElement(MenuLink_1.MenuLink, {route: 'tutorials'})));
        case 'progress':
            return React.createElement(MenuLink_1.MenuLink, {route: 'tutorials'});
        default:
            return null;
    }
    ;
}
exports.menuRightRouteOptions = menuRightRouteOptions;

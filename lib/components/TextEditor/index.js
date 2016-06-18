"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var styles = {
    editor: {
        textAlign: 'left',
        border: '2px solid red',
        margin: '5px',
        borderRadius: '3px',
    },
};
var TextEditor = (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        _super.apply(this, arguments);
    }
    TextEditor.prototype.componentDidMount = function () {
        var ed = atom.workspace.buildTextEditor();
        ed.setGrammar(atom.grammars.grammarForScopeName('source.js'));
        console.log(ed);
        ed.setText('var a = 42;');
        document.querySelector("#" + this.props.name).appendChild(ed.getElement());
    };
    TextEditor.prototype.render = function () {
        return React.createElement("div", {id: this.props.name, style: styles.editor});
    };
    return TextEditor;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextEditor;

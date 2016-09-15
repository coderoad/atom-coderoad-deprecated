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
    },
};
var TextEditor = (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        _super.apply(this, arguments);
        this.ed = atom.workspace.buildTextEditor();
    }
    TextEditor.prototype.get = function () {
        return this.ed.getText();
    };
    TextEditor.prototype.render = function () {
        return React.createElement("div", {id: this.props.name, style: styles.editor});
    };
    TextEditor.prototype.componentDidMount = function () {
        var _a = this.props, name = _a.name, text = _a.text, lang = _a.lang, placeholder = _a.placeholder;
        this.ed.setGrammar(atom.grammars.grammarForScopeName("source." + lang));
        if (text) {
            this.ed.setText(text || '');
        }
        if (placeholder) {
            this.ed.setPlaceholderText(placeholder);
        }
        document.querySelector("#" + name).appendChild(this.ed.getElement());
    };
    return TextEditor;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextEditor;

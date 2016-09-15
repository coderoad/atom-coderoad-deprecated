"use strict";
function highlight(text, lang) {
    var scopeName = "source." + lang;
    var grammar = atom.grammars.grammarForScopeName(scopeName);
    if (!grammar) {
        return text;
    }
    var lineTokens = grammar.tokenizeLines(text);
    if (lineTokens.length > 0) {
        var lastLineTokens = lineTokens[lineTokens.length - 1];
        if (lastLineTokens.length === 1 && lastLineTokens[0].value === '') {
            lineTokens.pop();
        }
    }
    var html = '<pre class="editor editor-colors">';
    lineTokens.forEach(function (line) {
        html += '<div class="line">';
        line.forEach(function (_a) {
            var value = _a.value, scopes = _a.scopes;
            if (!value) {
                value = ' ';
            }
            scopes.forEach(function (scope) {
                html += "<span class=\"" + scope.replace(/\./g, ' ') + "\">";
            });
            html += "" + value;
            scopes.forEach(function (scope) {
                html += '</span>';
            });
        });
    });
    html += '</div></pre>';
    return html;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = highlight;

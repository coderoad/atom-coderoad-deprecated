"use strict";
exports.getGrammar = function (scopeName) {
    return atom.grammars.grammarForScopeName(scopeName);
};
exports.tokenizeLines = function (grammar, text) { return grammar.tokenizeLines(text); };
;
//# sourceMappingURL=grammar.js.map
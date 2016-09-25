export const getGrammar = (scopeName: string) => {
  return atom.grammars.grammarForScopeName(scopeName);
}

export const tokenizeLines = (grammar, text: string) => grammar.tokenizeLines(text);; 
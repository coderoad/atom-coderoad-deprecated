export default function highlight(text: string, lang: string): string {
  const scopeName = `source.${lang}`;
  // get grammar
  const grammar = atom.grammars.grammarForScopeName(scopeName);
  // no grammar, return text
  if (!grammar) {
    return text;
  }
  // get tokens
  const lineTokens = grammar.tokenizeLines(text);
  if (lineTokens.length > 0) {
    const lastLineTokens = lineTokens[lineTokens.length - 1];
    if (lastLineTokens.length === 1 && lastLineTokens[0].value === '') {
      lineTokens.pop();
    }
  }
  let html = '<pre class="editor editor-colors">';

  lineTokens.forEach(line => {
    html += '<div class="line">';
    line.forEach(({value, scopes}) => {
      // account for spaces
      if (!value) {
        value = ' ';
      }
      // wrap text with class spans
      scopes.forEach(scope => {
        html += `<span class="${scope.replace(/\./g, ' ')}">`;
      });
      // text
      html += `${value}`;
      // closing tags
      scopes.forEach(scope => {
        html += '</span>';
      });
    });
  });
  html += '</div></pre>';
  return html;
}

import * as React from 'react';
import * as marked from 'marked';
const Highlights = require('highlights');
const highlighter = new Highlights({registry: atom.grammars});

const options = {
  highlight: (code: string, lang: string) => {
    return highlighter.highlightSync({
      fileContents: code,
      scopeName: 'source.' + (lang || 'js')
    });
  },
  sanitize: true,
  gfm: true,
  breaks: true,
  tables: true,
  smartLists: true
};

/**
 * Markdown -> HTML
 * @param  {string} text [Markdown string]
 * @return {string}      [HTML string]
 */
function formatText(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }
  return marked(text.toString(), options);
};

/**
 * Markdown Text
 * 	MD -> HTML
 */
export const Markdown: React.StatelessComponent<any> = ({children}) => {
  let text = formatText(children);
  return <span className='cr-markdown' dangerouslySetInnerHTML={
    {__html: text}
  }></span>;
};

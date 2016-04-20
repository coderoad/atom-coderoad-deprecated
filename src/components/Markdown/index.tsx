import * as React from 'react';
import * as marked from 'marked';
const Highlights = require('highlights');
const highlighter = new Highlights({registry: atom.grammars});

function highlight(code: string, lang: string) {
  return highlighter.highlightSync({
    fileContents: code,
    scopeName: 'source.' + (lang || 'js')
  });
}

const options = {
  breaks: true,
  gfm: true,
  highlight,
  tables: true,
  sanitize: true,
  smartLists: true,
};

function formatText(text: string): string {
  return typeof text !== 'string'
    ? ''
    : marked(text.toString(), options);
};

export const Markdown: React.StatelessComponent<{
  children?: string
}> = ({children}) => (
  <span className='cr-markdown' dangerouslySetInnerHTML={
    {__html: formatText(children)}
  }></span>
);

import * as marked from 'marked';

import highlight from './syntax-highlighter';

const options = {
  breaks: true,
  gfm: true,
  highlight,
  tables: true,
  sanitize: true,
  smartLists: true,
};

export default function (text: string): string {
  return typeof text !== 'string' ? '' : marked(text.toString(), options);
}

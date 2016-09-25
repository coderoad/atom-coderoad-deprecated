import * as React from 'react';

import formatText from './formatText';

const Markdown: React.StatelessComponent<{
  children: string, style?: React.CSSProperties
}> = ({style, children}) => (
  <span
    className='cr-markdown'
    style={style ? style : {}}
    dangerouslySetInnerHTML={{__html: formatText(children)}}
  />
);
export default Markdown;

import * as React from 'react';

import formatText from './formatText';

const Markdown: React.StatelessComponent<{
  children?: string, style?: Object
}> = ({style, children}) => (
  <span
    className='cr-markdown'
    style={style ? style : null}
    dangerouslySetInnerHTML={
      {__html: formatText(children)}
    }
  />
);
export default Markdown;

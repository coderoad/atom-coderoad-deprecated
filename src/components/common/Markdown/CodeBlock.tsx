import * as React from 'react';

import highlight from './syntax-highlighter';

const CodeBlock: React.StatelessComponent<{
  children?: string, style?: Object, lang: string
}> = ({style, children, lang}) => (
  <pre>
    <code
      style={style ? style : null}
      dangerouslySetInnerHTML={
        {__html: highlight(children, lang)}
      }
    />
  </pre>
);
export default CodeBlock;

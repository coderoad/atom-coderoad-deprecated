import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';

const SeeMore = () => (
  <div>
   What's next?
  <br /><br />
  <a href='https://coderoad.github.io/tutorials.html'>
    <FlatButton
      label='See More Tutorials'
      disabled={true}
    />
  </a>
  <span> (coming soon)</span>
  <br /><br />
  <a href='https://coderoad.github.io/builder-coderoad.html'>
    <FlatButton label='Learn how to Create a Tutorial' />
  </a>
  </div>
);

export default SeeMore;
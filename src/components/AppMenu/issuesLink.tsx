import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';

export function issuesLink() {
  if (!window.coderoad.issuesPath) {
    return null;
  }
  return (
    <MenuItem
        key='issue'
        className='link'
    >
      <a href={window.coderoad.issuesPath}>
        post issue
      </a>
    </MenuItem>
  );
}

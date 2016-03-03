import * as React from 'react';
import * as path from 'path';
const Edit = require('material-ui/lib/svg-icons/editor/mode-edit');

/**
 * Edit Component
 * 	basic chapter info
 */
export default (editPath) => {
  if (editPath && window.coderoad.edit) {
    let repoPath = path.join(window.coderoad.repo, 'edit', 'master', editPath);
    return <a href={repoPath}>
      <Edit style={{position: 'absolute', top: '10px', right: '10px'}}/>
      </a>;
  }
}

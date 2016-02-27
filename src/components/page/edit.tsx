'use strict';
import * as path from 'path';
const Edit = require('material-ui/lib/svg-icons/editor/mode-edit');

/**
 * Edit Component
 * 	basic chapter info
 */
export default (editPath) => {
  if (editPath && global.coderoad.edit) {
    let repoPath = path.join(global.coderoad.repo, 'edit', 'master', editPath);
    return <a href={repoPath}>
      <Edit style={{position: 'absolute', top: '10px', right: '10px'}}/>
      </a>;
  }
}

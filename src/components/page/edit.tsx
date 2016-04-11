import * as React from 'react';
import * as path from 'path';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
const editStyle = {position: 'absolute', top: '10px', right: '10px'};

export default (editPath: string) => {
  if (editPath && window.coderoad.edit) {
    let repoPath = path.join(window.coderoad.repo, 'edit', 'master', editPath);
    return <a href={repoPath}>
      <ModeEdit style={editStyle}/>
      </a>;
  }
}

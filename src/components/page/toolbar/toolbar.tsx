import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {ToggleLog, Save, Continue} from './buttons';

export const PageToolbar: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number, children?: any
}> = ({tasks, taskPosition, children}) => (
  <section className='cr-page-toolbar'>

    {children}

    <Toolbar>
      <ToolbarGroup float='left'>
        <ToggleLog />
      </ToolbarGroup>

      <ToolbarGroup float='right'>
        {taskPosition >= tasks.length ?
          <Continue /> : <Save />}
      </ToolbarGroup>

    </Toolbar>
  </section>
);

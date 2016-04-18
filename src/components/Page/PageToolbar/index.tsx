import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {ToggleLog} from './ToggleLog';
import {Save} from './Save';
import {Continue} from './Continue';

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

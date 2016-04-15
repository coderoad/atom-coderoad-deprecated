import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {ProgressBar} from './progress-bar';
import {ToggleLog, Save, Continue} from './buttons';

export const PageToolbar: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number
}> = ({tasks, taskPosition}) => (
  <section className='cr-page-toolbar'>
    <ProgressBar taskPosition={taskPosition} taskCount={tasks.length}/>

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

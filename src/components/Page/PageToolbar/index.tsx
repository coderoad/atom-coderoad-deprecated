import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {ToggleLog} from './ToggleLog';
import {Save} from './Save';
import {Continue} from './Continue';

const styles = {
    zIndex: '10000',
    position: 'fixed',
    bottom: '0',
    right: '0',
    height: '60px',
    width: '400px',
};

export const PageToolbar: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number, children?: any
}> = ({tasks, taskPosition, children}) => (
  <section styles={styles}>
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

import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {ToggleDevTools, Save, Continue} from '../../index';

const styles = {
    zIndex: '5',
    position: 'relative',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
    margin: '0px',
};

export const PageToolbar: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number, children?: any
}> = ({tasks, taskPosition, children}) => (
  <section styles={styles}>
    {children}
    <Toolbar>
      <ToolbarGroup float='left'>
        <ToggleDevTools />
      </ToolbarGroup>
      <ToolbarGroup float='right'>
        {taskPosition >= tasks.length ?
          <Continue /> : <Save />}
      </ToolbarGroup>
    </Toolbar>
  </section>
);
export default PageToolbar;

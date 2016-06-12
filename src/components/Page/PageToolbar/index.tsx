import * as React from 'react';
import {connect} from 'react-redux';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Save from './Save';
import Continue from './Continue';
import ToggleDevTools from './ToggleDevTools';
import {taskProgressSelector} from 'core-coderoad/lib/selectors';

const styles = {
    zIndex: '5',
    position: 'relative',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
    margin: '0px',
};

@connect(state => ({
  tasksComplete: taskProgressSelector(state) === 100
}))
export default class PageToolbar extends React.Component<{
  tasksComplete?: boolean, children?: any
}, {}> {
  render() {
    const {tasksComplete, children} = this.props;
    return (
      <section styles={styles}>
        {children}
        <Toolbar>
          <ToolbarGroup float='left'>
            <ToggleDevTools />
          </ToolbarGroup>
          <ToolbarGroup float='right'>
            {tasksComplete ? <Continue /> : <Save />}
          </ToolbarGroup>
        </Toolbar>
      </section>
    );
  }
}

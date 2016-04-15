import * as React from 'react';
import {connect} from 'react-redux';
import {nextPage} from '../../../actions/actions';
import {ProgressBar} from './progress-bar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {save} from '../../../atom/editor';
import {toggleDevTools} from '../../../atom/actions';
import {store} from '../../../store/store';

import Code from 'material-ui/svg-icons/action/code';

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(nextPage())
  };
})
export default class extends React.Component<{
  tasks: CR.Task[], taskPosition: number,
  callNextPage?: () => void, callNextTask?: () => void, showHint?: (pos: number) => void
}, {}> {
  render() {
    const {tasks, taskPosition, callNextPage} = this.props;

    return (
    <section className='cr-page-toolbar'>
      <ProgressBar taskPosition={taskPosition} taskCount={tasks.length}/>

      <Toolbar>

      <ToolbarGroup float='left'>
        <FlatButton icon={<Code />} onTouchTap={toggleDevTools} />
      </ToolbarGroup>

      <ToolbarGroup float='right'>
        {taskPosition >= tasks.length ?
          <RaisedButton label='Continue' primary={true} onTouchTap={callNextPage} /> :
          <FlatButton label='Save' secondary={true} onTouchTap={save} />
        }
      </ToolbarGroup>

    </Toolbar>
  </section>
  );
  }
}

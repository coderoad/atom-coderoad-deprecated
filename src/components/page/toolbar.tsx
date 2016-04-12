import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import LinearProgress from 'material-ui/lib/linear-progress';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import {save} from '../../atom/editor';
import {toggleDevTools} from '../../atom/actions';
import {store} from '../../_base';
import Code from 'material-ui/lib/svg-icons/action/code';

const ProgressBar = ({progress}) => <LinearProgress mode='determinate'
 value={progress} style={{height: '10px'}}/>;

function taskProgress(current: number, max: number) {
  return (current / max) * 100;
}

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(Action.nextPage()),
    toggleLog: () => dispatch(Action.toggleLog())
  };
})
export default class extends React.Component<{
  tasks: CR.Task[], taskPosition: number,
  callNextPage?: () => void, callNextTask?: () => void, showHint?: (pos: number) => void
}, {}> {
  render() {
    const {tasks, taskPosition, callNextPage} = this.props;
    const progress: number = taskProgress(taskPosition, tasks.length);

    return (
    <section className='cr-page-toolbar'>
      <ProgressBar progress={progress} />

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

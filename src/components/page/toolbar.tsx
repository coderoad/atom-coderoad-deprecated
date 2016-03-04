import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {LinearProgress, Toolbar, ToolbarGroup, RaisedButton} from 'material-ui';
import {save} from '../../atom/editor';

const ProgressBar = ({progress}) => <LinearProgress mode='determinate'
 value={progress} style={{height: '10px'}}/>;

function taskProgress(current: number, max: number) {
  return (current / max) * 100;
}

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(Action.nextPage()),
    callSave: () => save(),
    toggleLog: () => dispatch(Action.toggleLog())
  };
})
export default class extends React.Component<{
  tasks: CR.Task[], taskPosition: number, hintPosition: number,
  callNextPage?: () => void, callRunTests?: () => void, callNextTask?: () => void, showHint?: (pos: number) => void
}, {}> {
  render() {
    const {tasks, taskPosition, hintPosition, callNextPage, callRunTests, showHint} = this.props;
    const currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
    const progress: number = taskProgress(taskPosition, tasks.length);
    const allComplete = taskPosition >= tasks.length;
    return (
    <section className='cr-page-toolbar'>
      <ProgressBar progress={progress} />

      <Toolbar>

      <ToolbarGroup float='right'>
        {/* add log here */}

        {/* check work || continue */}
        {allComplete ?
          <RaisedButton label='Continue' primary={true} onTouchTap={callNextPage}/>
          :
          <RaisedButton label='Save' secondary={true} onTouchTap={callRunTests}/>
        }
      </ToolbarGroup>

    </Toolbar>
  </section>
  );
  }
}

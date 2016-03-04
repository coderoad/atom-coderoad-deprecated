import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {LinearProgress, Toolbar, ToolbarGroup, RaisedButton, FlatButton} from 'material-ui';
const iconPath = 'material-ui/lib/svg-icons/';
let Info = require(iconPath + 'action/info');
let InfoOutline = require(iconPath + 'action/info-outline');

const ProgressBar = ({progress}) => <LinearProgress mode='determinate'
 value={progress} style={{height: '6px'}}/>;

function taskProgress(current: number, max: number) {
  return (current / max) * 100;
}

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(Action.nextPage()),
    callRunTests: () => dispatch(Action.runTests()),
    toggleLog: () => dispatch(Action.toggleLog()),
    showHint: (newHintPos: number) => dispatch(Action.setHintPosition(newHintPos))
  };
})
export default class extends React.Component<{
  tasks: CR.Task[], taskPosition: number, hintPosition: number, displayHint: () => void,
  callNextPage?: () => void, callRunTests?: () => void, callNextTask?: () => void, showHint?: (pos: number) => void
}, {}> {
  displayHint(task) {
    const {hintPosition} = this.props;
    if (task && task.hints && task.hints.length) {
      if (hintPosition < task.hints.length - 1) {
        this.props.showHint(hintPosition + 1);
      }
    } else {
      this.props.showHint(-1);
    }
  }
  render() {
    const {tasks, taskPosition, hintPosition, callNextPage, callRunTests} = this.props;
    const currentTask = taskPosition <= tasks.length ? tasks[taskPosition] : null;
    const progress: number = taskProgress(taskPosition, tasks.length);
    const allComplete = taskPosition >= tasks.length;
    return (
    <section className='cr-page-toolbar'>
      <ProgressBar progress={progress} />

      <Toolbar>
        {currentTask && currentTask.hints && currentTask.hints.length ?
          <ToolbarGroup float='left'>
            {hintPosition <= currentTask.hints.length - 2 ?
              <FlatButton className='cr-task-showHint' icon={<InfoOutline/>} onClick={this.displayHint.bind(this)}></FlatButton>
              : <FlatButton className='cr-task-showHint-disabled' icon={<Info />} disabled={true} />}
          </ToolbarGroup>
          : null}

      <ToolbarGroup float='right'>
        {/* add log here */}

        {/* check work || continue */}
        {allComplete ?
          <RaisedButton label='Continue' primary={true} onClick={callNextPage}/>
          :
          <RaisedButton label='Run' secondary={true} onClick={callRunTests}/>
        }
      </ToolbarGroup>
    </Toolbar>
  </section>
  );
  }
}

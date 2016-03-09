import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {LinearProgress, Toolbar, ToolbarGroup, RaisedButton, FlatButton} from 'material-ui';
import {save, toggleDevTools} from '../../atom/editor';
import {store} from '../../_base';
const Code = require('material-ui/lib/svg-icons/action/code');

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
  getButton() {
    const {callNextPage, showHint, taskPosition, tasks} = this.props;
    switch (true) {
      case taskPosition >= tasks.length:
        return <RaisedButton label='Continue' primary={true} onTouchTap={callNextPage} />;
      default:
        return <RaisedButton label='Save' secondary={true} onTouchTap={save} />;
    }
  }
  render() {
    const {tasks, taskPosition} = this.props;
    const progress: number = taskProgress(taskPosition, tasks.length);

    return (
    <section className='cr-page-toolbar'>
      <ProgressBar progress={progress} />

      <Toolbar>

      <ToolbarGroup float='left'>
        <FlatButton icon={<Code />} onTouchTap={toggleDevTools} />
      </ToolbarGroup>

      <ToolbarGroup float='right'>
        {/* add log here */}
        {this.getButton()}
      </ToolbarGroup>

    </Toolbar>
  </section>
  );
  }
}

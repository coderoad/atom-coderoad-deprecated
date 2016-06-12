import * as React from 'react';
import {connect} from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import {taskProgressSelector, pageCompletedSelector} from '../../../selectors';

const style = {
  height: '10px',
  position: 'relative',
  margin: '0px',
};

@connect(state => ({
  // pageCompletedSelector(state),
  completed: state.progress.pages[state.pagePosition],
  taskProgress: (state.taskPosition / state.tutorial.pages[state.pagePosition].tasks.length) * 100
}))
export default class ProgressBar extends React.Component<{
  taskProgress?: number, completed?: boolean
}, {}> {
  render() {
    const {completed, taskProgress} = this.props;
    if (completed) {
      return null;
    }
    return (
      <LinearProgress
        mode='determinate'
        value={taskProgress}
        style={style}
      />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';

import {taskProgressSelector} from 'core-coderoad';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: '10px',
  position: 'relative',
  margin: '0px',
};

@connect(state => ({
  taskProgress: (state.taskPosition / state.tutorial.pages[state.pagePosition].tasks.length) * 100
}))
export default class ProgressBar extends React.Component<{
  taskProgress?: number
}, {}> {
  public render() {
    const {taskProgress} = this.props;
    return (
      <LinearProgress
        mode='determinate'
        value={taskProgress}
        style={style}
      />
    );
  }
}

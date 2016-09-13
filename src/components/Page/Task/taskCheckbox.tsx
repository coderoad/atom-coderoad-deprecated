import * as React from 'react';
import {connect} from 'react-redux';

import {green500, orange500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';

const styles = {
  checkbox: {
    position: 'absolute',
    top: '15px',
  },
};

class TaskCheckbox extends React.Component<{
  isRunning: boolean, isCurrentTask: boolean, index: number
}, {}> {
  public render(): any {
    const {isRunning, isCurrentTask} = this.props;
    if (!isCurrentTask || !isRunning) { return null; }
    return <IndeterminateCheckBox
      color={orange500}
      style={styles.checkbox}
    />;
  }
}

const mapStateToProps = (state, props) => ({
  isRunning: state.testRun.running,
  isCurrentTask: state.taskPosition === props.index,
});

export default connect(mapStateToProps)(TaskCheckbox);
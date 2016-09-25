import * as React from 'react';
import {connect} from 'react-redux';

import {green500, orange500, red500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';

interface IStyles {
  checkbox: React.CSSProperties;
};

const styles: IStyles = {
  checkbox: {
    position: 'absolute',
    top: '15px',
  },
};

class TaskCheckbox extends React.Component<{
  isRunning: boolean, isCurrentTask: boolean, isError: boolean, index: number
}, {}> {
  public render(): any {
    const {isRunning, isCurrentTask, isError} = this.props;
    if (isError) {
      return <IndeterminateCheckBox
        color={red500}
        style={styles.checkbox}
      />;
    }
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
  isError: state.testRun.error,
});

export default connect(mapStateToProps)(TaskCheckbox);
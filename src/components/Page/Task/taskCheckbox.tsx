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

@connect((state, props) => ({
  testRun: state.testRun,
  isCurrentTask: state.taskPosition === props.index,
}))
export default class TaskCheckbox extends React.Component<{
  testRun?: boolean, isCurrentTask?: boolean, index: number
}, {}> {
  render() {
    const {testRun, isCurrentTask} = this.props;
    if (!isCurrentTask || !testRun) { return null; }
    return <IndeterminateCheckBox
      color={orange500}
      style={styles.checkbox}
    />;
  }
}

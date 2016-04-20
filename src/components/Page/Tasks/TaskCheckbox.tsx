import * as React from 'react';
import {green500, orange500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import IndeterminateCheckBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';

export const TaskCheckbox: React.StatelessComponent<{
  index: number, taskPosition: number, testRun: boolean
}> = ({index, taskPosition, testRun}) => {
  let icon = null;
  console.log(index, taskPosition, testRun);
  if (index < taskPosition) {
    icon = <CheckBox color={green500} />;
  } else if (index === taskPosition && testRun) {
    // TODO: loading animation inside of checkbox
    icon = <IndeterminateCheckBox color={orange500} />;
  } else {
    icon = <CheckBoxOutlineBlank />;
  }
  return <span className='cr-task-checkbox'>{icon}</span>;
};

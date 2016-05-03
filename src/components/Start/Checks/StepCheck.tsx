import * as React from 'react';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import FontIcon from 'material-ui/FontIcon';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {red500} from 'material-ui/styles/colors';

const StepCheck: React.StatelessComponent<{
  completed: boolean, label: string, children?: any
}> = ({completed, label, children}) => (
  <Step
    completed={completed}
    active={!completed}
  >
    <StepLabel
      icon={completed
        ? <FontIcon>✓</FontIcon>
        : <WarningIcon color={red500} />}>
        {label}
    </StepLabel>
   <StepContent>
    {children}
    <br />
   </StepContent>
 </Step>
);
export default StepCheck;

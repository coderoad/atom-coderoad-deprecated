import * as React from 'react';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import VerifyButton from './VerifyButton';
import {pink500} from 'material-ui/styles/colors';
import {updateNpm} from '../../../reducers/checks/action-system';
import DynamicStepper from './DynamicStepper';
import StepCheck from './StepCheck';

const SystemChecks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => {
  if (checks.system.passed) {
    return null;
  }
  const status = [checks.system.node, checks.system.npm];
 return (
  <Card className='cr-check'>
    <CardHeader
      title='System Checks'
      subtitle='CodeRoad requires several key dependencies'
    />
    <CardText>
      <DynamicStepper  status={status}>
      <StepCheck
        label='Node >= 0.10'
        completed={checks.system.node}
      >
        <p>Install a newer version of <a style={{color: pink500}} href='https://nodejs.org'>NodeJS</a></p>
      </StepCheck>

      <StepCheck
        label='NPM >= 3'
        completed={checks.system.npm}
      >
        Update your version of NPM.<br />
        <code>> npm update -g npm</code><br />
        <FlatButton
          label='Update NPM'
          secondary={true}
          onTouchTap={updateNpm}
        />
      </StepCheck>

      <StepCheck
        label='Xcode'
        completed={checks.system.xcode}
      >
        <p>Install <a style={{color: pink500}} href='https://developer.apple.com/xcode/download/'>XCode</a></p>
      </StepCheck>
    </DynamicStepper>
  </CardText>
  <CardActions>
    <VerifyButton />
  </CardActions>
 </Card>
  );
};
export default SystemChecks;

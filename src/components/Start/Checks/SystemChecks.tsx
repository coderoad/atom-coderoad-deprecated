import * as React from 'react';

import DynamicStepper from './DynamicStepper';
import StepCheck from './StepCheck';
import VerifyButton from './VerifyButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Step, StepContent, StepLabel} from 'material-ui/Stepper';
import {pink500} from 'material-ui/styles/colors';
// import {updateNpm} from '../../../reducers/checks/action-system';

class SystemChecks extends React.Component<{
checks: CR.Checks
}, {}> {
  render(): any {
    const {system} = this.props.checks;
    if (system.passed) {
      return null;
    }
    const status = [system.node, system.npm];
    return (
    <Card className='cr-check'>
      <CardHeader
        title='System Checks'
        subtitle='CodeRoad requires several key dependencies'
      />
      <CardText>
        <DynamicStepper status={status}>
        <StepCheck
          label='Node >= 0.10'
          completed={system.node}
        >
          <p>Install a newer version of <a style={{color: pink500}} href='https://nodejs.org'>NodeJS</a></p>
          <p>Either version 4 (stable) or above.</p>
        </StepCheck>

        <StepCheck
          label='NPM >= 3'
          completed={system.npm}
        >
          Update your version of NPM.<br />
          <code>> npm update -g npm</code><br />
        </StepCheck>

        <StepCheck
          label='Atom >= 1.8'
          completed={system.atom}
        >
          <p>First make sure you have atom shell commands installed.
          Click the atom menu and select "Istall Shell Commands".</p>
          <p>Otherwise, update your version of Atom.<br />
          Click on the blue "update" squirrel in the bottom right corner of your editor.</p>
        </StepCheck>

        <StepCheck
          label='Xcode'
          completed={system.xcode}
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
  }
};
export default SystemChecks;

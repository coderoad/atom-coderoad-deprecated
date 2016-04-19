import * as React from 'react';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {VerifyButton} from './VerifyButton';
import {openDirectory, createPackageJson} from '../../../reducers/checks/action-setup';
import {DynamicStepper} from './DynamicStepper';
import {StepCheck} from './StepCheck';

export const SetupChecks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => {
  const setup = checks.setup;
  if (setup.passed) {
    return null;
  }
  const status = [setup.dir, setup.packageJson, setup.tutorial];
  return (
  <Card className='cr-check'>
    <CardHeader
      title='Setup Checks'
      subtitle='CodeRoad requires a brief setup'
    />
    <CardText>
      <DynamicStepper status={status}>
        <StepCheck
          label='open a directory'
          completed={checks.setup.dir}
        >
          <p>File -> Open (a new folder)</p><br />
          <FlatButton
            label='Open Directory'
            secondary={true}
            onTouchTap={openDirectory}
          />
        </StepCheck>

        <StepCheck
          label='package.json'
          completed={checks.setup.packageJson}
        >
          Create a package.json by running<br />
          <code>> npm init -y`</code><br />
          <FlatButton
            label='Create package.json'
            secondary={true}
            onTouchTap={createPackageJson}
          />
        </StepCheck>

        <StepCheck
          label='install a tutorial'
          completed={checks.setup.tutorial}
        >
          Install a tutorial using npm. For example:<br />
          <code>> npm install --save-dev coderoad-functional-school</code><br />
        </StepCheck>
      </DynamicStepper>
    </CardText>
    <CardActions>
      <VerifyButton />
    </CardActions>
  </Card>
  );
};

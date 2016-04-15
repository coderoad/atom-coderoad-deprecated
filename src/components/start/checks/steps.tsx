import * as React from 'react';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DynamicStepper from './setup-checker';
import {VerifyButton} from './verify';

import FontIcon from 'material-ui/FontIcon';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {red500, pink500} from 'material-ui/styles/colors';

import {openDirectory, createPackageJson, installTutorial} from '../../../reducers/checks/action-setup';
import {updateNpm} from '../../../reducers/checks/action-system';

const StepCheck: React.StatelessComponent<{
  completed: boolean, label: string, children?: any
}> = ({completed, label, children}) => (
  <Step completed={completed} active={!completed}>
    <StepLabel icon={completed
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

export const SystemChecks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => {
  const system = checks.system;
  if (system.passed) {
    return null;
  }
  const status = [system.node, system.npm];
 return <Card className='cr-check'>
   <CardHeader title='System Checks'
      subtitle='CodeRoad requires several key dependencies'/>
      <CardText>
   <DynamicStepper  status={status}>
  <StepCheck label='Node >= 0.10'
            completed={checks.system.node}>
    <p>Install a newer version of <a style={{color: pink500}} href='https://nodejs.org'>NodeJS</a></p>
  </StepCheck>

   <StepCheck label='NPM >= 3'
   completed={checks.system.npm}>
      Update your version of NPM.<br />
      <code>> npm update -g npm</code><br />
      <FlatButton label='Update NPM' secondary={true} onTouchTap={updateNpm} />
    </StepCheck>
 </DynamicStepper>
 </CardText>
 <CardActions><VerifyButton /></CardActions>
 </Card>;
};


export const SetupChecks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => {
  const setup = checks.setup;
  if (setup.passed) {
    return null;
  }
  const status = [setup.dir, setup.packageJson, setup.tutorial];
  return <Card className='cr-check'>
    <CardHeader title='Setup Checks'
      subtitle='CodeRoad requires a brief setup' />
      <CardText>
  <DynamicStepper status={status}>
  <StepCheck label='open a directory'
  completed={checks.setup.dir}>
      <p>File -> Open (a new folder)</p><br />
      <FlatButton label='Open Directory' secondary={true} onTouchTap={openDirectory}/>
   </StepCheck>

  <StepCheck label='package.json'
    completed={checks.setup.packageJson}>
       Create a package.json by running<br />
       <code>> npm init -y`</code><br />
       <FlatButton label='Create package.json' secondary={true} onTouchTap={createPackageJson} />
  </StepCheck>

  <StepCheck label='install a tutorial'
    completed={checks.setup.tutorial}>
     Install a tutorial using npm. For example:<br />
     <code>> npm install --save-dev coderoad-functional-school</code><br />
  </StepCheck>
  </DynamicStepper>
  </CardText>
  <CardActions><VerifyButton /></CardActions>
  </Card>;
};

export const InstallGuide: React.StatelessComponent<{
  show: boolean
}> = ({show}) => {
  if (!show) {
    return null;
  }
  return <div className='setup-guide'>
  <span>Check the
  <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a></span>
</div>;
};

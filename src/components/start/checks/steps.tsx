import * as React from 'react';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import {Card, CardHeader} from 'material-ui/Card';
import {Markdown} from '../../_components';
import DynamicStepper from './setup-checker';

import FontIcon from 'material-ui/FontIcon';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {red500} from 'material-ui/styles/colors';

import {openDirectory, createPackageJson, installTutorial} from '../../../reducers/checks/action-setup';
import {updateNpm} from '../../../reducers/checks/action-system';


const StepCheck: React.StatelessComponent<{
  completed: boolean, label: string, children?: any
}> = ({completed, label, children}) => (
  <Step completed={completed}>
    <StepLabel icon={completed
      ? <FontIcon>✓</FontIcon>
      : <WarningIcon color={red500} />}>
      {label}
    </StepLabel>
   <StepContent>
    {children}
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
   <CardHeader title='System Checks' />
   <DynamicStepper  status={status}>
  <StepCheck label='Node >= 0.10'
            completed={checks.system.node}>
    <p>Install a newer version of <a href='https://nodejs.org'>Node</a></p>
  </StepCheck>

   <StepCheck label='NPM >= 3'
   completed={checks.system.npm}>
      <Markdown>Update your version of NPM.
      `> npm update -g npm`</Markdown>
    </StepCheck>
 </DynamicStepper>
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
    <CardHeader title='Setup Checks' />
  <DynamicStepper status={status}>
  <StepCheck label='Open a Directory'
  completed={checks.setup.dir}>
      <p>File -> Open (a new folder)</p>
   </StepCheck>

  <StepCheck label='package.json'
    completed={checks.setup.packageJson}>
    <StepLabel>Package.json</StepLabel>
       <Markdown>Create a package.json by running
       `> npm init -y`</Markdown>
  </StepCheck>

  <StepCheck label='Install Tutorial'
    completed={checks.setup.tutorial}>
     <Markdown>Install a tutorial using npm. For example:
     `> npm install coderoad-functional-school --save-dev`</Markdown>
  </StepCheck>
  </DynamicStepper>
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

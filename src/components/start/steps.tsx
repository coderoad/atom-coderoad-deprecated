import * as React from 'react';
import Step from 'material-ui/lib/Stepper/VerticalStep';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

const DepStep = ({
  index, label, description, verify
}) => (
  <Step
     orderStepLabel={index}
     stepLabel={label}
     actions={[
       <RaisedButton
         key={0}
         label='Verify'
         primary={true}
         onTouchTap={verify}
       />,
       <FlatButton
         key={1}
         label='Cancel'
       />
     ]}
   >
     <div>{description}</div>
   </Step>
);

export const SystemSteps = () => (
  <div>
  <DepStep index='1' label='Node >= 0.10'
  description={<span>Install a newer version of <a href='https://nodejs.org'>Node</a></span>}
  verify={this.continue.bind(this)} />

  <DepStep index='2' label='NPM >= 3'
  description={'Update your version of NPM. `> npm update -g npm'}
  verify={this.continue.bind(this)} />
  </div>
);

export const TutorialSteps = () => (
  <div>
    <DepStep index='1' label='working directory'
    description='File -> Open (a new folder)'
    verify={this.continue.bind(this)} />
    <DepStep index='2' label='package.json'
    description='Create a package.json by running `> npm init -y`'
    verify={this.continue.bind(this)} />
    <DepStep index='3' label='install tutorial'
    description='Install a tutorial using npm. For example `> npm install coderoad-functional-school --save-dev`'
    verify={this.continue.bind(this)} />
  </div>
);

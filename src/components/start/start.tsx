'use strict';
import * as React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import {SetupGuide} from './setup';
import Tutorials from './tutorials';
import DynamicStepper from './dynamic-stepper';
import Step from 'material-ui/lib/Stepper/VerticalStep';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

export const Start = ({tutorials, warning}) => (
  <Paper className='cr-start'>
    <div className='cr-start-header'>
      <span className='title'>CodeRoad</span>
      <p className='tagline'>Tutorials in the Editor</p>
      <p className='version'>Beta</p>

      {!warning
        ? <Tutorials tutorials={tutorials}/>
        : <SetupGuide warning={warning} />}

        <DynamicStepper title='Dependency Checks'>
          <Step orderStepLabel='1'
             stepLabel='Node >= 0.10'
             actions={[
               <RaisedButton key={0} primary={true}
                 label='Verify'
                 onTouchTap={function() { return; }}
               />,
               <FlatButton key={1} label='Cancel' />
             ]} >
             <div>Install a newer version of <a href='https://nodejs.org'>Node</a></div>
           </Step>
           <Step orderStepLabel='2'
              stepLabel='NPM >= 3'
              actions={[
                <RaisedButton key={0} primary={true}
                  label='Verify'
                  onTouchTap={function() { return; }}
                />,
                <FlatButton key={1} label='Cancel' />
              ]} >
              <div>
              Update your version of NPM.<br />
              `> npm update -g npm`
              </div>
            </Step>
         </DynamicStepper>

        <DynamicStepper title='Setup Checks'>
          <Step orderStepLabel='1'
           stepLabel='working directory'
           actions={[
             <RaisedButton key={0} primary={true}
               label='Verify'
               onTouchTap={function() { return; }}
             />,
             <FlatButton key={1} label='Cancel' />
           ]} >
           <div>File -> Open (a new folder)</div>
         </Step>
        <Step orderStepLabel='2'
               stepLabel='package.json'
               actions={[
                 <RaisedButton key={0} primary={true}
                   label='Verify'
                   onTouchTap={function() { return; }}
                 />,
                 <FlatButton key={1} label='Cancel' />
               ]} >
               <div>
               Create a package.json by running<br />
               `> npm init -y`</div>
        </Step>
        <Step orderStepLabel='3'
             stepLabel='install tutorial'
             actions={[
               <RaisedButton key={0} primary={true}
                 label='Verify'
                 onTouchTap={function() { return; }}
               />,
               <FlatButton key={1} label='Cancel' />
             ]} >
             <div>
             Install a tutorial using npm. For example:<br />
             `> npm install coderoad-functional-school --save-dev`
             </div>
          </Step>
      </DynamicStepper>

    </div>
  </Paper>
);

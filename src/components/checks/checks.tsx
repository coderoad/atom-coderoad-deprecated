import * as React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import DynamicStepper from './dynamic-stepper';
import Step from 'material-ui/lib/Stepper/VerticalStep';
import FlatButton from 'material-ui/lib/flat-button';

import {connect} from 'react-redux';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(Action.setRoute('tutorials'))
  };
})
export class Checks extends React.Component<{
  checks: CR.Checks, routeToTutorials?: any
}, {}> {
  render() {
    const {checks, routeToTutorials} = this.props;
  return <Paper className='cr-start'>
    <div className='cr-start-header'>
      <span className='title'>CodeRoad</span>
      <p className='tagline'>Tutorials in the Editor</p>
      <p className='version'>Beta</p>

        {/* System Checks */}

        {checks.system.passed ? null : <DynamicStepper title='Dependency Checks'>
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
         </DynamicStepper>}

         {/* Setup Checks */}

        {checks.setup.passed ? null : <DynamicStepper title='Setup Checks'>
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
          </DynamicStepper>}

          {/* Install Guide || Continue */}

        {checks.passed
          ?  <FlatButton label='Begin' primary={true} onTouchTap={routeToTutorials}/>
          : <div className='setup-guide'>
          <span>Check the
          <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a></span>
        </div>}

    </div>
  </Paper>;
  }
}

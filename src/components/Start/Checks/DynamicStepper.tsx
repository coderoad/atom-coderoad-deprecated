import * as React from 'react';
import {Stepper, Step, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default class DynamicStepper extends React.Component<{
  status: boolean[], children?: any
}, {
  stepIndex: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: this.props.status.indexOf(false) || 0
    };
  }
  render() {
    return (
        <Stepper
          activeStep={this.state.stepIndex}
          linear={false}
          orientation='vertical'
        >
          {this.props.children}
        </Stepper>
    );
  }
}

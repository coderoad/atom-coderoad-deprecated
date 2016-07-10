import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Step, StepButton, StepContent, Stepper} from 'material-ui/Stepper';

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
  public render() {
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

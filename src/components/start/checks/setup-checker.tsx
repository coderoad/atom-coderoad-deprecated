import * as React from 'react';
import {Stepper, Step, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import FontIcon from 'material-ui/FontIcon';

const styles = {
  header: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },
  actionButton: {
    marginRight: 8
  }
};

export default class DynamicStepper extends React.Component<{
  status: boolean[], children?: any
}, {
  stepIndex: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: status.indexOf(false) || 0
    };
  }
  render() {
    const {stepIndex} = this.state;
    return <div>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation='vertical'>
          {this.props.children}
        </Stepper>
      </div>;
  }
}

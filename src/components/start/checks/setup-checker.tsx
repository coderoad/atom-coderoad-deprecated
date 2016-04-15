import * as React from 'react';
import Stepper from 'material-ui/Stepper';

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
  status: boolean[], title: string, children?: any
}, {
  activeStep: number, statusSteps: boolean[]
}> {
  constructor(props) {
    super(props);
    let statusSteps = this.props.status;
    this.state = {
      activeStep: statusSteps.indexOf(false) || -1,
      statusSteps
    };
  }
  selectStep(CurrentStep) {
    this.setState({
      activeStep: CurrentStep,
      statusSteps: this.state.statusSteps
    });
  }
  updateCompletedSteps(CurrentStep) {
    return this.state.statusSteps[CurrentStep];
  }
  createIcon(step) {
    if (step.props.isCompleted) {
      return (
        <FontIcon className='material-icons' style={{fontSize: 14}}>
          ✓
        </FontIcon>
      );
    }
    return <span>{step.props.orderStepLabel}</span>;
  }
  continue() {
    const {activeStep, statusSteps} = this.state;
    statusSteps[activeStep] = true;
    this.state = {
      activeStep: activeStep + 1,
      statusSteps,
    };
  }
  render() {
    return <div>
        <div style={styles.header}>
          {this.props.title}
        </div>
        <Stepper
          activeStep={this.state.activeStep}
          onStepHeaderTouch={this.selectStep.bind(this)}
          updateCompletedStatus={this.updateCompletedSteps.bind(this)}
          createIcon={this.createIcon}>
        {this.props.children}
        </Stepper>
      </div>;
  }
}

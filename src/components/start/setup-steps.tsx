import * as React from 'react';
import Stepper from 'material-ui/lib/Stepper/Stepper';
import FontIcon from 'material-ui/lib/font-icon';

let initState = {
  activeStep: -1,
  statusSteps: []
};

export default class extends React.Component<{}, {
  activeStep: number, statusSteps: boolean[]
}> {
  constructor(props) {
    super(props);
    this.state = initState;
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
      statusSteps: statusSteps,
    };
  }
  render() {
    return  <Stepper
          activeStep={this.state.activeStep}
          onStepHeaderTouch={this.selectStep.bind(this)}
          updateCompletedStatus={this.updateCompletedSteps.bind(this)}
          createIcon={this.createIcon}
        >

        {/* Steps */}

        </Stepper>;
  }
}

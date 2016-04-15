import * as React from 'react';

import {store} from '../../../store/store';
import * as Action from '../../../actions/actions';
import {connect} from 'react-redux';
import {SystemChecks, SetupChecks, InstallGuide} from './steps';

@connect(null, (dispatch) => {
  return {
    verify: () => store.dispatch(Action.verifySetup())
  };
})
export default class Checks extends React.Component<{
  checks: CR.Checks, verify?: any
}, {}> {
  render() {
    const {checks, verify} = this.props;
    return <div className='cr-checks'>
        <SystemChecks checks={checks} />
        <SetupChecks checks={checks} />
        <InstallGuide show={checks.passed} />
    </div>;
  }
}

import * as React from 'react';
import {connect} from 'react-redux';
import SystemChecks from './SystemChecks';
import SetupChecks from './SetupChecks';
import InstallGuide from './InstallGuide';
import {ContentCard} from '../../index';

const styles = {
  margin: '5px',
  padding: '10px',
};

@connect(state => ({
  checks: state.checks,
}))
export default class Checks extends React.Component<{
  checks?: CR.Checks
}, {}> {
  render() {
    const {checks} = this.props;
    if (!checks) {
      return <ContentCard title='Error Loading Package.json' />;
    }
    return (
      <div style={styles}>
        {!checks.system.passed ? <SystemChecks checks={checks} /> : null}
        {!checks.setup.passed ? <SetupChecks checks={checks} /> : null}
        <InstallGuide checks={checks} />
      </div>
    );
  }
}

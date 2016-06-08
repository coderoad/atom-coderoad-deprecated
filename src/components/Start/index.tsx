import * as React from 'react';
import {connect} from 'react-redux';
import Checks from './Checks';
import Welcome from './Welcome';

const headerStyles = {
  display: 'block',
  height: '100%',
  textAlign: 'center',
  color: '#f8f8f8',
};

@connect(state => ({
  checks: state.checks,
}))
export default class Start extends React.Component<{
  checks?: CR.Checks
}, {}> {
  render() {
    const {checks} = this.props;
    return (
      <section className='cr-start'>
        <div style={headerStyles}>
        {checks.passed
          ? <Welcome  />
          : <Checks checks={checks} />}
        </div>
      </section>
    );
  }
}

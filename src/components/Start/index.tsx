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

class Start extends React.Component<{
  ready: CR.Checks
}, {}> {
  public render() {
    const {ready} = this.props;

    return (
      <section className='cr-start'>
        <div style={headerStyles}>
        {ready
            ? <Welcome
              title='CodeRoad'
              tagline='Tutorials in your Editor'
              firstRoute='tutorials'
            />
          : <Checks />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  ready: state.checks.passed,
});

export default connect(mapStateToProps)(Start);
import * as React from 'react';
import {Checks} from './Checks';
import {Welcome} from './Welcome';

const styles = {
  position: 'relative',
  height: '100%',
  textAlign: 'center',
  color: 'white',
};

const headerStyles = {
  display: 'block',
  height: '300px',
  textAlign: 'center',
  color: '#f8f8f8',
};

export const Start: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
  <section style={styles}>
    <div style={headerStyles}>
    {checks.passed
      ? <Welcome  />
      : <Checks {...this.props}/>}
    </div>
  </section>
);

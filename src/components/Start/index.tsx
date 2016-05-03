import * as React from 'react';
import Checks from './Checks';
import Welcome from './Welcome';

const headerStyles = {
  display: 'block',
  height: '300px',
  textAlign: 'center',
  color: '#f8f8f8',
};

export const Start: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
  <section className='cr-start'>
    <div style={headerStyles}>
    {checks.passed
      ? <Welcome  />
      : <Checks {...this.props}/>}
    </div>
  </section>
);
export default Start;

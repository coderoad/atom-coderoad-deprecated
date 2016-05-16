import * as React from 'react';
import {Checks} from '../index';
import Welcome from './Welcome';

const headerStyles = {
  display: 'block',
  height: '100%',
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
      : <Checks checks={checks}/>}
    </div>
  </section>
);
export default Start;

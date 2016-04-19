import * as React from 'react';
import {Checks} from './Checks';
import {Welcome} from './Welcome';

export const Start: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
  <section className='cr-start'>
    <div className='cr-start-header'>
    {checks.passed
      ? <Welcome  />
      : <Checks {...this.props}/>}
    </div>
  </section>
);

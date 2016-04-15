import * as React from 'react';
import {SystemChecks, SetupChecks, InstallGuide} from './steps';
import {VerifyButton} from './verify';

export const Checks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
    <div className='cr-checks'>
        <SystemChecks checks={checks} />
        <SetupChecks checks={checks} />
        <br />
        <VerifyButton />
        <br />
        <InstallGuide show={checks.passed} />
    </div>
);

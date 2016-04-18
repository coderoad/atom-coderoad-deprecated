import * as React from 'react';
import {SystemChecks} from './SystemChecks';
import {SetupChecks} from './SetupChecks';
import {InstallGuide} from './InstallGuide';

export const Checks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
    <div className='cr-checks'>
        <SystemChecks checks={checks} />
        <SetupChecks checks={checks} />

        <InstallGuide show={checks.passed} />
    </div>
);

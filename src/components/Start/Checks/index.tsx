import * as React from 'react';
import SystemChecks from './SystemChecks';
import SetupChecks from './SetupChecks';
import InstallGuide from './InstallGuide';

const styles = {
  margin: '10px',
  padding: '40px 20px',
};

const Checks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
    <div styles={styles}>
        <SystemChecks checks={checks} />
        <SetupChecks checks={checks} />

        <InstallGuide show={checks.passed} />
    </div>
);
export default Checks;

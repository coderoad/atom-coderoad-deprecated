import * as React from 'react';
import SystemChecks from './SystemChecks';
import SetupChecks from './SetupChecks';
import InstallGuide from './InstallGuide';
import {ContentCard} from '../../index';

const styles = {
  margin: '5px',
  padding: '10px',
};

const Checks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => {
  if (!checks) {
    return <ContentCard
        title='Error Loading Package.json'
        content=''
      />;
  }
  return (
    <div style={styles}>
    {!checks.system.passed
      ? <SystemChecks checks={checks} />
      : null}
      {!checks.setup.passed
        ? <SetupChecks checks={checks} />
        : null}
      <InstallGuide checks={checks} />
    </div>
  );
};
export default Checks;

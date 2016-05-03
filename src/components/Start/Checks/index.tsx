import * as React from 'react';
import SystemChecks from './SystemChecks';
import SetupChecks from './SetupChecks';
import InstallGuide from './InstallGuide';
import {ContentCard} from '../../index';

const styles = {
  margin: '10px',
  padding: '40px 20px',
};

const Checks: React.StatelessComponent<{
  checks: CR.Checks
}> = ({checks}) => (
    <div styles={styles}>

        {checks
          ? <div>
              <SystemChecks checks={checks} />
              <SetupChecks checks={checks} />
            </div>
          : <ContentCard
              title='Error Loading Package.json'
              content=''
            />
        }
        <InstallGuide checks={checks} />
    </div>
);
export default Checks;

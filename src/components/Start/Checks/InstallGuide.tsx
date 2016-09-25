import * as React from 'react';

class InstallGuide extends React.Component<{
  checks: CR.Checks
}, {}> {
  public render(): any {
    const { checks } = this.props;
    if (!checks || !checks.passed) {
      return null;
    }
    return (
      <div className='setup-guide'>Check the
        <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a>
      </div>
    );
  }
};
export default InstallGuide;

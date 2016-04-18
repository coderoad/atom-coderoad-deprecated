import * as React from 'react';

export const InstallGuide: React.StatelessComponent<{
  show: boolean
}> = ({show}) => {
  if (!show) {
    return null;
  }
  return (
    <div className='setup-guide'>Check the
      <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a>
    </div>
  );
};

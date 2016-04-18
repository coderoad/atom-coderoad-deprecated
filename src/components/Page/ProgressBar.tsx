import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export const ProgressBar: React.StatelessComponent<{
  taskPosition: number, taskCount: number
}> = ({taskPosition, taskCount}) => {
  const progress: number = (taskPosition / taskCount) * 100;
  return (
    <LinearProgress
      mode='determinate'
      value={progress}
      style={{height: '10px'}}
    />
  );
};

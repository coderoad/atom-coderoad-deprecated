import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: '10px'
};

export const ProgressBar: React.StatelessComponent<{
  taskPosition: number, taskCount: number, completed: boolean
}> = ({taskPosition, taskCount, completed}) => {
  const progress: number = (taskPosition / taskCount) * 100;
  if (completed) {
    return null;
  }
  return (
    <LinearProgress
      mode='determinate'
      value={progress}
      style={style}
    />
  );
};

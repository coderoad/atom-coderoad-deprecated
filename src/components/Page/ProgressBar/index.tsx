import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: '10px',
  position: 'relative',
  margin: '0px',
};

const ProgressBar: React.StatelessComponent<{
  taskPosition: number, taskLength: number, completed: boolean
}> = ({taskPosition, taskLength, completed}) => {
  const progress: number = (taskPosition / taskLength) * 100;
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
export default ProgressBar;

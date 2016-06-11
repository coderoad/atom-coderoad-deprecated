import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: '10px',
  position: 'relative',
  margin: '0px',
};

const ProgressBar: React.StatelessComponent<{
  taskProgress: number, completed: boolean
}> = ({taskProgress, completed}) => {
  if (completed) {
    return null;
  }
  return (
    <LinearProgress
      mode='determinate'
      value={taskProgress}
      style={style}
    />
  );
};
export default ProgressBar;

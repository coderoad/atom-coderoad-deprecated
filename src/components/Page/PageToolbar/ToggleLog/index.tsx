import * as React from 'react';
import Code from 'material-ui/svg-icons/action/code';
import {toggleDevTools} from '../../../../atom/editor';
import FlatButton from 'material-ui/FlatButton';

const ToggleLog = () => (
  <FlatButton
    icon={
      <Code />
    }
    onTouchTap={toggleDevTools}
  />
);
export default ToggleLog;

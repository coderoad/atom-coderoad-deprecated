import * as React from 'react';
import Code from 'material-ui/svg-icons/action/code';
import {toggleDevTools} from '../../../atom/actions';
import FlatButton from 'material-ui/FlatButton';

export const ToggleLog = () => (
  <FlatButton
    icon={
      <Code />
    }
    onTouchTap={toggleDevTools}
  />
);

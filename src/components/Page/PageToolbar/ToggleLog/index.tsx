import * as React from 'react';
import Code from 'material-ui/svg-icons/action/code';
import {toggleDevTools} from '../../../../atom/editor';
import FlatButton from 'material-ui/FlatButton';

export const ToggleLog = () => (
  <FlatButton
    icon={
      <Code />
    }
    onTouchTap={toggleDevTools}
  />
);

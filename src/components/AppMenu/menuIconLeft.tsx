import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import {togglePanel} from '../mount';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export function menuIconLeft() {
  return (
    <IconButton onClick={togglePanel}>
      <NavigationClose />
    </IconButton>
  );
}

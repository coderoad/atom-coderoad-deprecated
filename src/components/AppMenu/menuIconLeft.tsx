import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import {Root} from '../root';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export function menuIconLeft() {
  return (
    <IconButton onClick={Root.toggle}>
      <NavigationClose />
    </IconButton>
  );
}

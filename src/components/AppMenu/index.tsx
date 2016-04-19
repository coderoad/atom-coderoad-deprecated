import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {menuIconLeft} from './menuIconLeft';
import {menuRight} from './menuRight';

export const AppMenu: React.StatelessComponent<{
  route: string, quit?: any
}> = ({route}) => {
  return (
    <AppBar
      title='CodeRoad'
      className='cr-menu-bar'
      iconElementLeft={menuIconLeft()}
      iconElementRight={menuRight(route)}
    />
  );
};

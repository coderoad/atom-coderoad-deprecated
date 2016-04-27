import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {menuIconLeft} from './menuIconLeft';
import {menuRight} from './menuRight';

const styles = {
  zIndex: '1 !important'
};

export const AppMenu: React.StatelessComponent<{
  route: string, quit?: any
}> = ({route}) => {
  return (
    <AppBar
      title='CodeRoad'
      className='cr-menu-bar'
      styles={styles}
      iconElementLeft={menuIconLeft()}
      iconElementRight={menuRight(route)}
    />
  );
};

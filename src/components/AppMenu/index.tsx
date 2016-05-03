import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {CloseWindow} from './CloseWindow';
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
      iconElementLeft={<CloseWindow />}
      iconElementRight={menuRight(route)}
    />
  );
};

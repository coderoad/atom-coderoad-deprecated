import * as React from 'react';

import menuIconRight from './menuIconRight';
import menuRightRouteOptions from './menuRightRouteOptions';
import Quit from './Quit';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
// import issuesLink from './issuesLink';

const origin: __MaterialUI.propTypes.origin = {
  horizontal: 'right',
  vertical: 'top',
};

export default function menuRight(route: string) {
  return (
    <IconMenu
      iconButtonElement={menuIconRight()}
      targetOrigin={origin}
      anchorOrigin={origin}
    >
      {menuRightRouteOptions(route)}
      {/*issuesLink()*/}
      <Divider />
      <Quit />
    </IconMenu>
  );
}

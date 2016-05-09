import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';
import Quit from './Quit';
// import issuesLink from './issuesLink';
import menuIconRight from './menuIconRight';
import menuRightRouteOptions from './menuRightRouteOptions';

const origin = {
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

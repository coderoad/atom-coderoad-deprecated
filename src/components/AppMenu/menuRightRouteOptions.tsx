import * as React from 'react';

import MenuLink from './MenuLink';

export default function menuRightRouteOptions(route: string) {
  switch (route) {
    case 'final':
    case 'page':
      return (
        <div>
          <MenuLink route='progress'/>
          <MenuLink route='tutorials' />
        </div>
      );
    case 'progress':
      return <MenuLink route='tutorials' />;
    default:
      return null;
  }
}

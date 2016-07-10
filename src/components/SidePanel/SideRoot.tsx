import * as React from 'react';
import {Provider} from 'react-redux';

import muiTheme from '../styles/theme';
import SidePanel from './SidePanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = store => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <SidePanel />
    </MuiThemeProvider>
  </Provider>
);
export default Root;

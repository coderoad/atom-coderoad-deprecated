import * as React from 'react';
import {Provider} from 'react-redux';
import muiTheme from '../styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SidePanel from './SidePanel';

const Root = store => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <SidePanel />
    </MuiThemeProvider>
  </Provider>
);
export default Root;

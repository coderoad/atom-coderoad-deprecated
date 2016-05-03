import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';
import App from './App';
import muiTheme from './styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './remove-later';

export default function render(target: HTMLElement) {
  ReactDOM.render(
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </Provider>,
    target
  );
}

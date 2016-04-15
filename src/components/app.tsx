import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Routes, Alert} from './_components';
import {muiTheme} from './theme/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let height: number = atom.getSize().height;
window.onresize = function() {
  height = atom.getSize().height;
};

@connect((state: CR.State) => {
  return { state };
})
export default class extends React.Component<{state?: CR.State}, {}> {
  render(): React.ReactElement<{}> {
    const state = this.props.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <section className='cr' key='main' style={{height}}>
        <AppMenu route={state.route} position={state.position} />
        <Routes state={state} ref='route' />
        <Alert alert={state.alert} />
      </section>
      </MuiThemeProvider>

    );
  }
};

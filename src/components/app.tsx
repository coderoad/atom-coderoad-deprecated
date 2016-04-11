import * as React from 'react';
import {connect} from 'react-redux';
import {Menu, Routes, Alert} from './_components';
// import {muiTheme} from './theme/theme';
// import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

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
      <section className='cr' key='main' style={{height}}>
        <Menu route={state.route} position={state.position} />
        <Routes state={state} ref='route' />
        <Alert alert={state.alert} />
      </section>
    );
  }
};

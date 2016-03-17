import * as React from 'react';
import {connect} from 'react-redux';
import {Menu, Routes, Alert, Theme} from './_components';
import * as ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import * as ThemeManager from 'material-ui/lib/styles/theme-manager';

let height: number = atom.getSize().height;
window.onresize = function() {
  height = atom.getSize().height;
};

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
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

import * as React from 'react';
import {connect} from 'react-redux';
import {Menu, Router, Alert} from '../_components';
import * as ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import * as ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../theme/theme';

@ThemeDecorator(ThemeManager.getMuiTheme(Theme))
@connect((state: CR.State) => {
  return { state };
})
export default class extends React.Component<{state?: CR.State}, {}> {
  render(): React.ReactElement<{}> {
    const state = this.props.state;
    const height = atom.getCurrentWindow().getBounds().height;
    return (
      <section className='cr' key='main' style={{height}}>
        <Menu route={state.route} position={state.position} />
        <Router state={state} ref='route' />
        <Alert alert={state.alert} />
      </section>

    );
  }
};

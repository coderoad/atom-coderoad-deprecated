'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import {Menu, Router, Alert} from '../_components';
import * as ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../theme/theme';

/**
 * App Component
 */
@connect((state: CR.State) => {
  return { state };
})
export default class extends React.Component<{state?: CR.State}, {}> {
  static childContextTypes = {
      muiTheme: React.PropTypes.object,
    };
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  }
  render(): React.ReactElement<{}> {
    const state = this.props.state;
    return (
        <section className='cr'>
          <Menu route={state.route} position={state.position} />
          <Router state={state} />
          <Alert alert={state.alert} />
        </section>
    );
  }
};

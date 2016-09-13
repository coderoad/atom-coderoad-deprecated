import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Router} from 'react-router-sans-urls';

import {Alert, AppMenu, FinalPage, Page, Progress, Start, Tutorials} from '../index';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';

class SidePanel extends React.Component<{
  isWindowOpen: boolean, route: string
}, {}> {
  public render(): React.ReactElement<{}> {
    const {isWindowOpen, route} = this.props;
    return (
      <section>
        <Drawer
          width={400}
          openSecondary={true}
          open={isWindowOpen}
        >
          <div className='cr-bg'>
            <AppMenu />
            <Router route={route}>
              <Route path='page' component={<Page />} />
              <Route path='progress' component={<Progress />} />
              <Route path='start' component={<Start />} />
              <Route path='tutorials' component={<Tutorials />} />
              <Route path='final' component={<FinalPage />} />
            </Router>
          </div>
        </Drawer>
        <Alert />
      </section>
    );
  }
  private componentWillMount() {
    this.startErrorLog();
  }
  private startErrorLog() {
    window.onerror = (message, file, line, column, errorObject) => {
      // column = column || (window.event && window.event.errorCharacter);
      const stack = errorObject ? errorObject.stack : null;

      const data = {
          message,
          file,
          line,
          column,
          errorStack: stack,
      };

      // call to server
      return false;
    };
  }
};

const mapStateToProps = state => ({
  isWindowOpen: state.window,
  route: state.route,
});

export default connect(mapStateToProps)(SidePanel);
import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from './index';
import Routes from './Routes';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';

@connect(state => ({
  windowToggle: state.windowToggle,
}))
export default class App extends React.Component<{
  windowToggle?: boolean
}, {}> {
  render(): React.ReactElement<{}> {
    const {windowToggle} = this.props;
    return (
      <section>
        <Drawer
          width={400}
          openSecondary={true}
          open={windowToggle}
        >
          <div className='cr-bg'>
            <AppMenu />
            <Routes />
          </div>
        </Drawer>
      <Alert />
    </section>
    );
  }
};

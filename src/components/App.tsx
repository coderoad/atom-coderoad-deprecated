import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from './index';
import Routes from './Routes';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';

@connect((store: CR.State) => {
  return { store };
})
export default class App extends React.Component<{store?: CR.State}, {}> {
  render(): React.ReactElement<{}> {
    const store = this.props.store;
    return (
      <section>
        <Drawer
          width={400}
          openSecondary={true}
          open={store.windowToggle}
        >
          <div className='cr-bg'>
            <AppMenu {...store} />
            <Routes {...store} />
          </div>
        </Drawer>
      <Alert {...store} />
    </section>
    );
  }
};

import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from './index';
import {Routes} from './Routes';
import Drawer from 'material-ui/Drawer';
// import {Hold} from './Hold';
import Menu from 'material-ui/svg-icons/navigation/menu';

let height: number = atom.getSize().height;
window.onresize = function() {
  height = atom.getSize().height;
};

@connect((store: CR.State) => {
  return { store };
})
export class App extends React.Component<{store?: CR.State}, {}> {
  render(): React.ReactElement<{}> {
    const store = this.props.store;
    return (
      <section
        style={{height}}
        className='cr-bg'
      >
      <Drawer
        width={400}
        openSecondary={true}
        open={store.open}
        >
        <div className='cr-bg'>
          <AppMenu {...store} />
          <Routes {...store} />
          <Alert {...store} />
        </div>
      </Drawer>
    </section>
    );
  }
};

import * as React from 'react';
import {connect} from 'react-redux';
import {AppMenu, Alert} from './index';
import {Routes} from './Routes';
import Drawer from 'material-ui/Drawer';
import {Hold} from './Hold';

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
        className='cr'
        key='main'
        style={{height}}
      >
    <Drawer width={400} openSecondary={true} open={store.open} >
        <AppMenu {...store} />
        <Routes {...store} />
        <Alert {...store} />
    </Drawer>
    <Hold />
    </section>
    );
  }
};

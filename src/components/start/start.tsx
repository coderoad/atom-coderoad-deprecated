import * as React from 'react';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';
import * as path from 'path';
import Checks from './checks/checks';

import RaisedButton from 'material-ui/FlatButton';

const welcomeStyle = {
  backgroundImage: `url("${path.resolve(__dirname, '../../../', 'styles', 'coderoad.jpg')}")`,
  backgroundRepeat: 'no-repeat',
  height: '350px',
};

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(Action.setRoute('tutorials'))
  };
})
class Welcome extends React.Component<{
  routeToTutorials?: any
}, {}> {
  render() {
    return <div  style={welcomeStyle}>
      <div className='cr-welcome'>
        <div className='title'>CodeRoad</div>
        <div className='tagline'>Tutorials in your Editor</div>
        <br /><br />
        <RaisedButton label='Start' onTouchTap={this.props.routeToTutorials} secondary={true}/>
      </div>
    </div>;
  }
}

export const Start = ({checks}) => (
  <section className='cr-start'>
    <div className='cr-start-header'>

    {checks.passed
      ? <Welcome  />
      : <Checks checks={checks}/>}

    </div>

  <br />
  <p className='version'>Beta</p>
</section>
);

import * as React from 'react';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import {setRoute} from '../../actions';
import * as path from 'path';
import {Checks} from './Checks';
import FlatButton from 'material-ui/FlatButton';

const welcomeStyle = {
  backgroundImage: `url("${path.resolve(__dirname, '../../../', 'styles', 'coderoad.jpg')}")`,
  backgroundRepeat: 'no-repeat',
  height: '350px',
};

const welcomeButtonStyle = {
  fontSize: '1.4em',
  padding: '5px 2px'
};

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(setRoute('tutorials'))
  };
})
class Welcome extends React.Component<{
  routeToTutorials?: any
}, {}> {
  render() {
    return <div style={welcomeStyle}>
      <div className='cr-welcome'>
        <div className='title'>CodeRoad</div>
        <div className='tagline'>Tutorials in your Editor</div>
        <br /><br />
        <FlatButton label='Start' onTouchTap={this.props.routeToTutorials} secondary={true} style={welcomeButtonStyle}/>
      </div>
    </div>;
  }
}

export const Start = ({checks}) => (
  <section className='cr-start'>
    <div className='cr-start-header'>
    {checks.passed
      ? <Welcome  />
      : <Checks {...this.props}/>}
    </div>
</section>
);

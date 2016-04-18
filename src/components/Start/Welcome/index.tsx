import * as React from 'react';
import {connect} from 'react-redux';
import {setRoute} from '../../../actions';
import {resolve} from 'path';
import FlatButton from 'material-ui/FlatButton';

const imagePath = resolve(__dirname, '../../../../', 'styles', 'coderoad.jpg');

const welcomeStyle = {
  backgroundImage: `url("${imagePath}")`,
  backgroundRepeat: 'no-repeat',
  height: '350px',
};

const welcomeButtonStyle = {
  fontSize: '1.4em',
  padding: '5px 2px'
};

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => dispatch(setRoute('tutorials'))
  };
})
export class Welcome extends React.Component<{
  routeToTutorials?: any
}, {}> {
  render() {
    return (
    <div style={welcomeStyle}>
      <div className='cr-welcome'>
        <div className='title'>CodeRoad</div>
        <div className='tagline'>Tutorials in your Editor</div>
        <br /><br />
        <FlatButton
          style={welcomeButtonStyle}
          label='Start'
          onTouchTap={this.props.routeToTutorials}
          secondary={true}
        />
      </div>
    </div>
    );
  }
}

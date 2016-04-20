import * as React from 'react';
import {connect} from 'react-redux';
import {setRoute} from '../../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, (dispatch) => {
  return {
    routeTo: (route: string) => dispatch(setRoute(route)),
  };
})
export class RouteButton extends React.Component<{
  label: string, route: string, routeTo?: any, style?: Object
}, {}> {
  render() {
    const {label, route, style, routeTo} = this.props;
    return (
        <FlatButton
          label={label}
          style={style || {}}
          onTouchTap={routeTo.bind(this, route)}
          secondary={true}
        />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {routeSet} from '../../actions';

@connect(null, dispatch => {
  return {
    routeTo: (route: string) => dispatch(routeSet(route))
  };
})
export default class RouteButton extends React.Component<{
  label: string, route: string, routeTo?: any, style?: Object
}, {}> {
  render() {
    const {label, route, style, routeTo} = this.props;
    return (
        <RaisedButton
          label={label}
          style={style || {}}
          onTouchTap={routeTo.bind(this, route)}
          secondary={true}
        />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {pageNext} from '../../../../actions';

const styles = {
  zIndex: '10000',
  border: '0px',
  boxShadow: 'none',
  backgroundColor: 'inherit',
  position: 'relative',
  top: '10px',
};

@connect(null, (dispatch, state) => {
  return {
    callNextPage: () => dispatch(pageNext())
  };
})
export default class Continue extends React.Component<{
  callNextPage?: any
}, {}> {
  render() {
    return (
      <RaisedButton
        style={styles}
        label='Continue'
        primary={true}
        onTouchTap={this.props.callNextPage}
      />
    );
  }
}

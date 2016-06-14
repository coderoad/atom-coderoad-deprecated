import * as React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {pageNext} from '../../../../actions';

const styles = {
  border: '0px',
  boxShadow: 'none',
  backgroundColor: 'inherit',
  position: 'relative',
  top: '10px',
};

@connect(null, {pageNext})
export default class Continue extends React.Component<{
  pageNext?: any
}, {}> {
  render() {
    return (
      <RaisedButton
        style={styles}
        label='Continue'
        primary={true}
        onTouchTap={this.props.pageNext}
      />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {testSave} from '../../../../actions';

@connect(null, (dispatch, state) => {
  return {
    save: () => {
      dispatch(testSave());
    }
  };
})
export default class Save extends React.Component<{
  save?: any
}, {}> {
  render() {
    return (
      <FlatButton
        label='Save'
        secondary={true}
        onTouchTap={this.props.save}
      />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';

import {editorSave} from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  border: '0px',
  boxShadow: 'none',
  backgroundColor: 'inherit',
  position: 'relative',
  top: '10px',
};

@connect(null, (dispatch, state) => {
  return {
    save: () => dispatch(editorSave())
  };
})
export default class Save extends React.Component<{
  save?: any
}, {}> {
  public render() {
    return (
      <RaisedButton
        label='Save'
        style={styles}
        secondary
        onTouchTap={this.props.save}
      />
    );
  }
}

import * as React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {editorSave} from '../../actions';

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
  render() {
    return (
      <RaisedButton
        label='Save'
        style={styles}
        secondary={true}
        onTouchTap={this.props.save}
      />
    );
  }
}

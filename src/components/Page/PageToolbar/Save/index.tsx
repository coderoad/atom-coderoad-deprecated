import * as React from 'react';
import {connect} from 'react-redux';

import {editorSave} from '../../../../actions';
import RaisedButton from 'material-ui/RaisedButton';

const styles: React.CSSProperties = {
  border: '0px',
  boxShadow: 'none',
  backgroundColor: 'inherit',
  position: 'relative',
  top: '10px',
};

class Save extends React.Component<{
  editorSave: any
}, {}> {
  public render() {
    return (
      <RaisedButton
        label='Save'
        style={styles}
        secondary={true}
        onTouchTap={this.props.editorSave}
      />
    );
  }
}

const mapDispatchToProps = {editorSave};

export default connect(null, mapDispatchToProps)(Save);

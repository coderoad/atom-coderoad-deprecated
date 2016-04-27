import * as React from 'react';
import {connect} from 'react-redux';
import Update from 'material-ui/svg-icons/action/update';
import {tutorialUpdate} from '../../../actions';
import {pink500} from 'material-ui/styles/colors';

const styles = {
  width: '18px',
  marginLeft: '10px',
};

@connect(null, (dispatch) => {
  return {
    tutorialUpdate: (name: string) => dispatch(tutorialUpdate(name)),
  };
})
export class UpdateTutorial extends React.Component<{
  name: string, tutorialUpdate?: any
}, {}> {
  render() {
    const {name, tutorialUpdate} = this.props;
    return (
      <Update
        style={styles}
        color={pink500}
        onTouchTap={tutorialUpdate.bind(this, name)}
      />
    );
  }
}

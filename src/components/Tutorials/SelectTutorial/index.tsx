import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {
  positionSet, tutorialSet, progressLoad, routeSet
} from '../../../actions';

function displayName(name: string): string {
  if (name.match(/^coderoad-tutorial-/)) {
    return name.slice(18);
  } else if (name.match(/^coderoad-/)) {
    return name.slice(9);
  }
  return name;
}

@connect(null, (dispatch) => {
  return {
    selectTutorial: (name: string) => {
      dispatch(tutorialSet(name));
      dispatch(positionSet({page: 0}));
      dispatch(progressLoad());
      dispatch(routeSet('progress'));
    },
  };
})
export class SelectTutorial extends React.Component<{
  tutorial: Tutorial.Info, selectTutorial?: any
}, {}> {
  render() {
    const {tutorial, selectTutorial} = this.props;
    const name = tutorial.name;
    return (
      <FlatButton
        label={displayName(name)}
        primary={true}
        onTouchTap={selectTutorial.bind(this, name)}
      />
    );
  }
}

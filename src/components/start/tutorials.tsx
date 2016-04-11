import * as React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Subheader from 'material-ui/lib/Subheader';
import {MarkdownText} from '../_components';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';

@connect(null, (dispatch) => {
  return {
    selectProject: (name: string) => {
      Action.loadTutorial(name);
      dispatch(Action.setRoute('progress'));
    },
    toggleAlert: (item: CR.Alert): void => {
      dispatch(Action.toggleAlert(item));
    },
    loadTutorials: () => {
      dispatch(Action.loadTutorials());
    }
  };
})
export default class extends React.Component<{
  tutorials: string[], loadTutorials?: () => void,
  selectProject?: (name: string) => void, toggleAlert?: (item: CR.Alert) => void
}, {}> {
    trim(name: string): string {
      if (name.match(/^coderoad-tutorial-/)) {
        return name.slice(18);
      }
      if (name.match(/^coderoad-/)) {
        return name.slice(9);
      }
      return name;
    }
  render() {
    const {tutorials, loadTutorials, selectProject, toggleAlert} = this.props;
    return (
  <div className='cr-tutorials'>
    <List>
    <Subheader>Tutorials</Subheader>
    {/* List of Tutorials */}
    {tutorials.map((tutorial: string, index) => {
    return (
      <ListItem
        key={index}
        primaryText={this.trim(tutorial)}
        onClick={selectProject.bind(this, tutorial)}/>);
      })}

    </List>

    <br />
    <RaisedButton label='Load Tutorials' secondary={true} onTouchTap={loadTutorials} />
  </div>
    );
  }
}

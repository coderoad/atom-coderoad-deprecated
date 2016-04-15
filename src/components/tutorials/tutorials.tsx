import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody
} from 'material-ui/Table';
import {connect} from 'react-redux';
import {
  loadTutorial, loadTutorials, updateTutorial, setRoute, toggleAlert
} from '../../actions/actions';

import {pink500} from 'material-ui/styles/colors';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

@connect(null, (dispatch) => {
  return {
    selectTutorial: (tutorial: CR.Tutorial) => {
      loadTutorial(tutorial);
      dispatch(setRoute('progress'));
    },
    toggleAlert: (item: CR.Alert): void => {
      dispatch(toggleAlert(item));
    },
    loadTutorials: () => {
      dispatch(loadTutorials());
    },
    updateTutorial: (name: string) => {
      dispatch(updateTutorial(name));
    }
  };
})
class TutorialList extends React.Component<{
  tutorials: CR.Tutorial[], loadTutorials?: () => void,
  selectTutorial?: (tutorial: CR.Tutorial) => void,
  toggleAlert?: (item: CR.Alert) => void, updateTutorial?: any
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
    const {tutorials, loadTutorials, selectTutorial, toggleAlert, updateTutorial} = this.props;
    return (
  <div className='cr-tutorials'>
    <Table>
      <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
       <TableRow>
        <TableHeaderColumn>Tutorial</TableHeaderColumn>
        <TableHeaderColumn>Version</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>

        {tutorials.map((tutorial: CR.Tutorial, index) => {
        return (
          <TableRow key={index}>
            <TableRowColumn>
            <FlatButton label={this.trim(tutorial.name)} primary={true} onTouchTap={selectTutorial.bind(this, tutorial)} />
            </TableRowColumn>
            {!!tutorial.latest
              ? <TableRowColumn>
                {tutorial.version} <FileUpload onClick={updateTutorial(tutorial.name)} />
                </TableRowColumn>
              : <TableRowColumn>{tutorial.version}</TableRowColumn>}
          </TableRow>
          );
          })
        }
      </TableBody>
    </Table>

    <br />
      <FlatButton style={{margin: '0 90px'}} label='Check for Tutorials' secondary={true} onTouchTap={loadTutorials} />
  </div>
    );
  }
}

export const Tutorials = ({tutorials}) => (
  <TutorialList tutorials={tutorials} />
);

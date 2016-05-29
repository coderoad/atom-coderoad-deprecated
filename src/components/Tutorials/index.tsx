import * as React from 'react';
import {connect} from 'react-redux';
import {
  Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody
} from 'material-ui/Table';
import LoadTutorials from './LoadTutorials';
import UpdateTutorial from './UpdateTutorial';
import SelectTutorial from './SelectTutorial';
import {tutorialsFind} from '../../actions';

const styles = {
  padding: '10px',
  textAlign: 'center',
};


@connect(null, (dispatch) => {
  return {
    loadTutorials: () => dispatch(tutorialsFind())
  };
})
export default class Tutorials extends React.Component<{
  tutorials: Tutorial.Info[], loadTutorials?: any
}, {}> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadTutorials();
  }
  render() {
    const {tutorials} = this.props;
    return (
  <div style={styles}>
    <Table>

      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>Tutorial</TableHeaderColumn>
          <TableHeaderColumn>Version</TableHeaderColumn>
        </TableRow>
      </TableHeader>

      <TableBody displayRowCheckbox={false}>
        {tutorials.map(function tutorialRow(
          tutorial: Tutorial.Info, index: number
        ) {
        return (
          <TableRow key={index}>
            <TableRowColumn>
              <SelectTutorial tutorial={tutorial} />
            </TableRowColumn>
              <TableRowColumn>
                {tutorial.version}

                {!!tutorial.latest
                  ? <UpdateTutorial tutorial={tutorial} />
                  : null
                }

            </TableRowColumn>
          </TableRow>
        );
      })
    }
    </TableBody>
  </Table>

    <br />
    <LoadTutorials />
  </div>
    );
  }
}

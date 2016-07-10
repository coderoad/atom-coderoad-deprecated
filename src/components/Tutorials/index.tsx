import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialsFind} from '../../actions';
import LoadTutorials from './LoadTutorials';
import SelectTutorial from './SelectTutorial';
import UpdateTutorial from './UpdateTutorial';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

const styles = {
  padding: '10px',
  textAlign: 'center',
};

@connect(state => ({
  tutorials: state.tutorials,
}), {tutorialsFind})
export default class Tutorials extends React.Component<{
  tutorials?: Tutorial.Item[], tutorialsFind?: any
}, {}> {
  constructor(props) {
    super(props);
  }
  public render() {
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
          tutorial: Tutorial.Item, index: number
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
  private componentDidMount() {
    this.props.tutorialsFind();
  }
}

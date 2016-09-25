import * as React from 'react';
import {connect} from 'react-redux';

import {tutorialsFind} from '../../actions';
import LoadTutorials from './LoadTutorials';
import SelectTutorial from './SelectTutorial';
import UpdateTutorial from './UpdateTutorial';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

const styles: React.CSSProperties = {
  padding: '10px',
  textAlign: 'center',
};

class Tutorials extends React.Component<{
  tutorials: Tutorial.Info[], tutorialsFind: any
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
          tutorial: Tutorial.Info, index: number
        ) {
        return (
          <TableRow key={index}>
            <TableRowColumn>
              <SelectTutorial tutorial={tutorial} />
            </TableRowColumn>
              <TableRowColumn>
                {tutorial.version}

                {!tutorial.isLatest
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

const mapStateToProps = state => ({
  tutorials: state.tutorials,
});

const mapDispatchToProps = {tutorialsFind};

export default connect(mapStateToProps, mapDispatchToProps)(Tutorials);

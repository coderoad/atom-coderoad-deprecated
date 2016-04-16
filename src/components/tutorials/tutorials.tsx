import * as React from 'react';
import {
  Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody
} from 'material-ui/Table';
import {
  LoadTutorials, SelectTutorial, UpdateTutorial
} from './buttons';

export const Tutorials : React.StatelessComponent<{
  tutorials: CR.Tutorial[]
}> = ({tutorials}) => (
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
            <SelectTutorial tutorial={tutorial} />
            </TableRowColumn>
            {tutorial.latest
              ? <TableRowColumn>
                {tutorial.version} <UpdateTutorial name={tutorial.name} />
                </TableRowColumn>
              : <TableRowColumn>{tutorial.version}</TableRowColumn>}
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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardTitle, CardText, CardACtions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const FinalPage: React.StatelessComponent<{}> = () => (
  <Paper>
    <Card>
      <CardTitle title='Congratulations!'
      subtitle='Tutorial Complete!' />
      <CardText>
        What's next?

        <CardActions>
          <a href='https://coderoad.github.io/#tutorials'><FlatButton label='See More Tutorials' disabled={true}/></a>
          <a href='https://coderoad.github.io/build'><FlatButton label='Learn how to Create a Tutorial' /></a>
        </CardActions>
      </CardText>
    </Card>
  </Paper>
);

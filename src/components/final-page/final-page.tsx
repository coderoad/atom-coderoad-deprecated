import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

export const FinalPage = () => (
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

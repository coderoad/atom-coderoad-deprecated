import * as React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  margin: '5px',
  padding: '10px',
};

export const FinalPage: React.StatelessComponent<{}> = () => (
    <Card style={styles}>
      <CardTitle
        title='Congratulations!'
        subtitle='Tutorial Complete!'
      />
      <CardText>
        What's next?
        <br /><br />
        <a href='https://coderoad.github.io/#tutorials'>
          <FlatButton
            label='See More Tutorials'
            disabled={true}
          />
        </a>
        <span> (coming soon)</span>
        <br /><br />
        <a href='https://coderoad.github.io/build'>
          <FlatButton label='Learn how to Create a Tutorial' />
        </a>
      </CardText>

    </Card>
);
export default FinalPage;

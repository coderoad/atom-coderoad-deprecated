import * as React from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const styles = {
  card: {
    margin: '5px',
    padding: '10px',
  },
};

@connect(null, null)
export default class FinalPage extends React.Component<{}, {}> {
  public render() {
    return (
      <Card style={styles.card}>
        <CardTitle
          title='Congratulations!'
          subtitle='Tutorial Complete!'
        />
        <CardText>
          What's next?
          <br /><br />
          <a href='https://coderoad.github.io/tutorials.html'>
            <FlatButton
              label='See More Tutorials'
              disabled={true}
            />
          </a>
          <span> (coming soon)</span>
          <br /><br />
          <a href='https://coderoad.github.io/builder-coderoad.html'>
            <FlatButton label='Learn how to Create a Tutorial' />
          </a>
        </CardText>

      </Card>
    );
  }
}

FinalPage.propTypes = {};

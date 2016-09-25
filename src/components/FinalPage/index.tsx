import * as React from 'react';
import {connect} from 'react-redux';

import {finalPageSelector} from '../../selectors';
import {Markdown} from '../index';
import SeeMore from './SeeMore';
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

interface IStyles {
  card: React.CSSProperties;
};

const styles: IStyles = {
  card: {
    margin: '5px',
    padding: '10px',
  },
};

class FinalPage extends React.Component<{
  page: { description: string }
}, {}> {
  public render() {
    const { page } = this.props;
    return (
      <Card style={styles.card}>
        <CardTitle
          title='Congratulations!'
          subtitle='Tutorial Complete!'
        />
        <CardText>
          {page && page.description ? <Markdown children={page.description} /> : null}
          {page && page.description ? <Divider /> : null}
          <SeeMore />
        </CardText>

      </Card>
    );
  }
}

const mapStateToProps = state => ({
  page: finalPageSelector(state)
})

export default connect(mapStateToProps)(FinalPage);

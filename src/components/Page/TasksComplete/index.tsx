import * as React from 'react';
import {connect} from 'react-redux';

import {pageSelector} from '../../../selectors';
import {Markdown} from '../../index';
import {Card, CardText} from 'material-ui/Card';
import {cyan500, grey100} from 'material-ui/styles/colors';

interface IStyles {
  card: React.CSSProperties;
  text: React.CSSProperties;
};

const styles: IStyles = {
  card: {
    backgroundColor: cyan500,
    margin: '10px 5px',
  },
  text: {
    color: grey100,
    fontSize: '1.1em'
  },
};

class TasksComplete extends React.Component<{
  onPageComplete: string
}, {}> {
  public render() {
    const {onPageComplete} = this.props;
    if (!onPageComplete || !onPageComplete.length) {
      return <div />;
    }
    return (
      <Card style={styles.card}>
        <CardText>
          <Markdown style={styles.text} children={onPageComplete} />
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  onPageComplete: pageSelector(state).onPageComplete,
});

export default connect(mapStateToProps)(TasksComplete);
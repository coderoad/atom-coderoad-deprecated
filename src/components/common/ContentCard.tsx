import * as React from 'react';

import {Markdown} from '../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

interface IStyles {
  card: React.CSSProperties;
};

const styles: IStyles = {
  card: {
    margin: '5px',
  },
};

const ContentCard: React.StatelessComponent<{
  title: string, content?: string
}> = ({title, content}) => (
  <Card style={styles.card}>
    {title ? <CardHeader title={title} /> : null}
    <CardText>
      <Markdown children={content || ''} />
    </CardText>
  </Card>
);
export default ContentCard;

// ContentCard.propTypes = {
//   title: React.PropTypes.string,
//   content: React.PropTypes.string.optional,
// };

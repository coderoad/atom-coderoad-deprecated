import * as React from 'react';
import {Markdown} from '../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  margin: '5px'
};

const ContentCard: React.StatelessComponent<{
  title: string, content: string
}> = ({title, content}) => (
  <Card style={styles}>
    {title ? <CardHeader title={title} /> : null}
    <CardText>
      <Markdown>{content}</Markdown>
    </CardText>
  </Card>
);
export default ContentCard;

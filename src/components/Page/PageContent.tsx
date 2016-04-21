import * as React from 'react';
import {Markdown} from '../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  margin: '5px'
};

export const PageContent: React.StatelessComponent<{
  page: CR.Page
}> = ({page}) => (
  <Card style={styles}>
    <CardHeader title={page.title} />
    <CardText>
      <Markdown>{page.description}</Markdown>
    </CardText>
  </Card>
);

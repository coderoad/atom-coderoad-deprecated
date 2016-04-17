import * as React from 'react';
import {Markdown} from '../index';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export const PageContent: React.StatelessComponent<{
  page: CR.Page
}> = ({page}) => (
  <Card className='cr-page-content'>
    <CardHeader title={page.title} />
    <CardText>
      <Markdown>{page.description}</Markdown>
    </CardText>
  </Card>
);

import * as React from 'react';
import {Markdown} from '../_components';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

export const PageContent: React.StatelessComponent<{
  page: CR.Page
}> = ({page}) => (
  <Card>
    <CardHeader title={page.title} />
    <CardText>
      <Markdown>{page.description}</Markdown>
    </CardText>
  </Card>
);

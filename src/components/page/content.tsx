import * as React from 'react';
import {MarkdownText} from '../_components';
import {Card, CardHeader, CardText} from 'material-ui';

export default function ({page}) {
  return (
    <Card>
      <CardHeader title={page.title} />
      <CardText>
        <MarkdownText text={page.description} />
      </CardText>
    </Card>
  );
}

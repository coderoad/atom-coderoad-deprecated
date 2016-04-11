import * as React from 'react';
import {MarkdownText} from '../_components';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

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

import * as React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import {MarkdownText} from '../../_components';

export const PageCompleteMessage = ({page}) => (
  <div className='cr-page-onComplete'>
    {page.completed && page.onPageComplete ?
      <ListItem key='page-complete'>
        <MarkdownText text={page.onPageComplete} />
      </ListItem>
   : null}
  </div>
);

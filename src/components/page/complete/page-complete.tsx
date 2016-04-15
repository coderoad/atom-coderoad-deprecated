import * as React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import {Markdown} from '../../_components';

export const PageCompleteMessage = ({page}) => (
  <div className='cr-page-onComplete'>
    {page.completed && page.onPageComplete ?
      <ListItem key='page-complete'>
        <Markdown>{page.onPageComplete}</Markdown>
      </ListItem>
   : null}
  </div>
);

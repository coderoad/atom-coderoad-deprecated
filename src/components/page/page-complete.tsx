import * as React from 'react';
import {ListItem} from 'material-ui';
import {MarkdownText} from '../_components';

export const PageCompleteMessage = ({page}) => (
  <div className='cr-task-onComplete-description'>
    {page.completed && page.onPageComplete ?
      <ListItem className='cr-task-onComplete' key='page-complete'>
        <MarkdownText text={page.onPageComplete} />
      </ListItem>
   : null}
  </div>
);

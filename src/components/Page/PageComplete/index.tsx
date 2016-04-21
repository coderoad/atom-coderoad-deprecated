import * as React from 'react';
import {ListItem} from 'material-ui/List';
import {Markdown} from '../../index';

export const PageComplete: React.StatelessComponent<{
  page: CR.Page
}> = ({page}) => (
  <div className='cr-page-onComplete'>
    {
      page.completed && page.onPageComplete
        ? <ListItem key='page-complete'>
            <Markdown>{page.onPageComplete}</Markdown>
          </ListItem>
        : null
    }
  </div>
);

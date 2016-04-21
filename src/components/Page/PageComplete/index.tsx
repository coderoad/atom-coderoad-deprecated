import * as React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Markdown} from '../../index';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
  backgroundColor: cyan500,
  position: 'fixed',
  bottom: '20px',
  padding: '10px 15px 30px',
  right: '0px',
  margin: '0',
  width: '400px',
};

export const PageComplete: React.StatelessComponent<{
  page: CR.Page
}> = ({page}) => (
  <div className='cr-page-onComplete'>
    {page.completed && page.onPageComplete
        ? <Card style={styles}>
            <CardText>
                <Markdown>{page.onPageComplete}</Markdown>
            </CardText>
          </Card>
        : null
    }
  </div>
);

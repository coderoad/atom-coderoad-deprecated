import * as React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Markdown} from '../../index';
import {cyan500, grey100} from 'material-ui/styles/colors';

const styles = {
  backgroundColor: cyan500,
  margin: '10px 5px',
};

const textStyles = {
  color: grey100,
  fontSize: '1.1em'
};

const TasksComplete: React.StatelessComponent<{
  page: CR.Page, completed: boolean
}> = ({page, completed}) => {
  if (!completed || !page.onPageComplete) { return null; }
  return (
    <Card style={styles}>
      <CardText>
        <Markdown style={textStyles}>{page.onPageComplete}</Markdown>
      </CardText>
    </Card>
  );
};
export default TasksComplete;

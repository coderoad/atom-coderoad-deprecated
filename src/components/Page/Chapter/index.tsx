import * as React from 'react';
import {Markdown} from '../../index';

const styles = {
  display: 'block',
  height: '33px',
  width: '100%',
  padding: '10px',
  textAlign: 'center',
};

export const Chapter: React.StatelessComponent<{
  chapter: CR.Chapter
}> = ({chapter}) => (
  <section styles={styles}>
    <Markdown>{chapter.title}</Markdown>
  </section>
);

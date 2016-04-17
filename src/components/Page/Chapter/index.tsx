import * as React from 'react';
import {Markdown} from '../../index';

export const Chapter: React.StatelessComponent<{
  chapter: CR.Chapter
}> = ({chapter}) => (
  <section className='cr-chapter'>
    <Markdown>{chapter.title}</Markdown>
  </section>
);

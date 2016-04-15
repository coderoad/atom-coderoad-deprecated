'use strict';
import * as React from 'react';
import {Markdown} from '../../_components';
/**
 * Chapters Component
 * 	basic chapter info
 */
export const Chapter: React.StatelessComponent<{chapter}> = ({chapter}) => (
  <section className='cr-chapter'>
    <Markdown>{chapter.title}</Markdown>
  </section>
);

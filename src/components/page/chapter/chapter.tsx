'use strict';
import * as React from 'react';
import {Markdown} from '../../_components';
/**
 * Chapters Component
 * 	basic chapter info
 */
export default ({chapter}) => (
  <section className='cr-chapter'>
    <Markdown>{chapter.title}</Markdown>
  </section>
);

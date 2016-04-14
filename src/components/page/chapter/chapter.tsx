'use strict';
import * as React from 'react';
import {MarkdownText} from '../_components';
/**
 * Chapters Component
 * 	basic chapter info
 */
export default ({chapter}) => (
  <section className='cr-chapter'>
    <MarkdownText text={chapter.title} />
  </section>
);

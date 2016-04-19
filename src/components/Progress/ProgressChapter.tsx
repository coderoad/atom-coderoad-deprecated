import * as React from 'react';
import * as classnames from 'classnames';
import {ListItem} from 'material-ui/List';
import {ProgressPage} from './ProgressPage';
import {progressIcon} from './progressIcon';
import {Markdown} from '../index';

export const ProgressChapter: React.StatelessComponent<{
  chapter: CR.Chapter, chapterIndex: number, position: CR.Position
}> = ({chapter, chapterIndex, position}) => {
    const isActive = chapterIndex === position.chapter;
    return (
      <ListItem
        key={'c' + chapterIndex}
        className={classnames({
          'chapter': true,
          'isActive': isActive
          })
        }
        initiallyOpen={chapterIndex === 0}
        leftIcon={progressIcon(chapter.completed)}
        primaryTogglesNestedList={
          chapterIndex === position.chapter && !chapter.completed
        }
        nestedItems={
          chapter.pages.map((page: CR.Page, pageIndex: number) => (
              <ProgressPage
                key={'c' + chapterIndex + 'p' + pageIndex}
                pageIndex={pageIndex}
                page={page}
                chapterIndex={chapterIndex}
                position={position}
              />
          ))
        }
      >
      <h3>{chapterIndex + 1}. {chapter.title}</h3>
      <span className='chapter-description'>
        <Markdown>{chapter.description}</Markdown>
      </span>
   </ListItem>
    );
};

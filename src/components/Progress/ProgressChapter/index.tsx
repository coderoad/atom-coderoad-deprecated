import * as React from 'react';
import {ListItem} from 'material-ui/List';
import {ProgressPage} from '../ProgressPage';
import {progressIcon} from '../progressIcon';
import {Markdown} from '../../index';

const styles = {
  marginBottom: '0px'
};

const descriptionStyles = {
  fontSize: '14px'
};

export const ProgressChapter: React.StatelessComponent<{
  progress: CR.Progress, chapter: CR.Chapter,
  chapterIndex: number, position: CR.Position
}> = ({progress, chapter, chapterIndex, position}) => {
    const isActive = chapterIndex === position.chapter;
    return (
      <ListItem
        key={chapterIndex}
        className={isActive ? 'isActive' : null}
        style={styles}
        initiallyOpen={chapterIndex === 0}
        primaryTogglesNestedList={
          chapterIndex === position.chapter && !progress.chapters[chapterIndex].completed
        }
        nestedItems={
          chapter.pages.map((page: CR.Page, pageIndex: number) => (
              <ProgressPage
                key={pageIndex}
                pageIndex={pageIndex}
                page={page}
                chapterIndex={chapterIndex}
                position={position}
                progress={progress}
              />
          ))
        }
      >
      <h3>{chapterIndex + 1}. {chapter.title}</h3>
      <span style={descriptionStyles}>
        <Markdown>{chapter.description}</Markdown>
      </span>
   </ListItem>
    );
};

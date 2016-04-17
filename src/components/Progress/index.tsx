import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, setRoute} from '../../actions';
import {Markdown} from '../index';
import * as classnames from 'classnames';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {pink500} from 'material-ui/styles/colors';

import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

// page
@connect(null, (dispatch) => {
  return {
    selectPage: (position: CR.Position) => {
      dispatch(pageSet(position));
      dispatch(setRoute('page'));
    }
  };
})
class ProgressPage extends React.Component<{page: CR.Page, itemPosition: CR.Position, position: CR.Position, selectPage?: () => void}, {}> {
  getProgressIcon(completed, current) {
    if (completed) {
      return <CheckBox />;
    } else if (current) {
      return <PlayCircleFilled color={pink500} />;
    } else {
      return <CheckBoxOutlineBlank />;
    }
  }
  canActivate(isActive, itemPosition, position) {
    const earlierChapter = itemPosition.chapter < position.chapter;
    const currentChapter = itemPosition.chapter = position.chapter;
    const earlierOrCurrentPage = itemPosition.page <= position.page;
    if (isActive || earlierChapter || (currentChapter && earlierOrCurrentPage)) {
      return true;
    } else {
      return null;
    }
  }
  render() {
    const {page, itemPosition, position} = this.props;
    const isActive = itemPosition.chapter === position.chapter && itemPosition.page === position.page;
    return <ListItem
            className={classnames({
              'page': true,
              'page-isDisabled': !this.canActivate(isActive, itemPosition, position)
            })}
            primaryText={`${itemPosition.page + 1}. ${page.title}`}
            secondaryText={page.description}
            leftIcon={this.getProgressIcon(page.completed, isActive)}
            onClick={this.canActivate(isActive, itemPosition, position) ? this.props.selectPage.bind(this, itemPosition) : null }
            />;
    };
};

const style = {
  // height: '100%',
  width: '100%',
  margin: 0
};

/**
 * Progress Component
 * 	display page data
 */
export const Progress: React.StatelessComponent<{
  progress: CR.Progress, position: CR.Position
}> = ({progress, position}) => (
  <Paper style={style} zDepth={1} className='cr-progress'>
    <List>
      <Subheader>Progress</Subheader>
    {progress.chapters.map((chapter: CR.Chapter, chapterIndex: number) => {
      const isActive = chapterIndex === position.chapter;
      return <ListItem
          key={'c' + chapterIndex}
          className={classnames({
            'chapter': true,
            'isActive': isActive
          })}
          initiallyOpen={chapterIndex === 0}
          leftIcon={chapter.completed ? <CheckBox /> : null}
          primaryTogglesNestedList={chapterIndex === position.chapter && !chapter.completed}
          nestedItems={chapter.pages.map((page: CR.Page, pageIndex: number) => {
            const itemPosition = {chapter: chapterIndex, page: pageIndex};
            return <ProgressPage key={'c' + chapterIndex + 'p' + pageIndex} page={page} itemPosition={itemPosition} position={position}/>;
         })}>
            <h3>{chapterIndex + 1}. {chapter.title}</h3>
            <span className='chapter-description'>
              <Markdown>{chapter.description}</Markdown>
            </span>
         </ListItem>;
    })}
    </List>
  </Paper>
);

'use strict';
import * as React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';
import {Paper, List, ListItem, RaisedButton} from 'material-ui';
import * as classnames from 'classnames';
import * as Colors from 'material-ui/lib/styles/colors';
let Completed = require('material-ui/lib/svg-icons/toggle/check-box');
let Current = require('material-ui/lib/svg-icons/av/play-circle-filled');
let AllCompleted = require('material-ui/lib/svg-icons/action/done-all');
let Incomplete = require('material-ui/lib/svg-icons/toggle/check-box-outline-blank');

// page
@connect(null, (dispatch) => {
  return {
    selectPage: (position: CR.Position) => {
      dispatch(Action.setPage(position));
      dispatch(Action.setRoute('page'));
    }
  };
})
class ProgressPage extends React.Component<{page: CR.Page, itemPosition: CR.Position, position: CR.Position, selectPage?: () => void}, {}> {
  getProgressIcon(completed, current) {
    if (completed) {
      return <Completed />;
    } else if (current) {
      return <Current color={Colors.pink500} />;
    } else {
      return <Incomplete />;
    }
  }
  canActivate(isActive, itemPosition, position) {
    if (isActive && itemPosition.chapter <= position.chapter && itemPosition.page <= position.page) {
      return true;
    } else {
      return null;
    }
  }
  render() {
    const {page, itemPosition, position} = this.props;
    const isActive = itemPosition.chapter === position.chapter && itemPosition.page === position.page;
    return (<ListItem
            key={itemPosition.page}
            className={classnames({
              'cr-page': true,
              'cr-page-isDisabled': !this.canActivate(isActive, itemPosition, position)
            })}
            primaryText={`${itemPosition.page + 1}. ${page.title}`}
            secondaryText={page.description}
            secondaryTextLines={page.description.length > 50 ? 2 : 1}
            leftIcon={this.getProgressIcon(page.completed, isActive)}
            onClick={this.canActivate(isActive, itemPosition, position) ? this.props.selectPage.bind(this, itemPosition) : null } />
            );
          };
};

const style = {
  height: '100%',
  width: '100%',
  margin: 0
};

/**
 * Progress Component
 * 	display page data
 */
export default ({progress, position}) => (
  <Paper style={style} zDepth={1} className='cr-progress'>
    {/*}<ProjectDescription project={project} />*/}
    <List subheader='Progress'>
    {progress.chapters.map((chapter: CR.Chapter, chapterIndex: number) => {
      const isActive = chapterIndex === position.chapter;
      return <ListItem  primaryText={`${chapterIndex + 1}. ${chapter.title}`}
          className={classnames({
            'chapter': true,
            'isActive': isActive
          })}
          secondaryText={chapter.description}
          secondaryTextLines={chapter.description.length > 35 ? 2 : 1}
          initiallyOpen={chapterIndex === 0}
          leftIcon={chapter.completed ? <AllCompleted /> : null}
          primaryTogglesNestedList={chapterIndex === position.chapter && !chapter.completed}
          nestedItems={chapter.pages.map((page: CR.Page, pageIndex: number) => {
            const itemPosition = {chapter: chapterIndex, page: pageIndex};
            return <ProgressPage page={page} itemPosition={itemPosition} position={position}/>;
         })}/>;
    })}
    </List>
  </Paper>
);

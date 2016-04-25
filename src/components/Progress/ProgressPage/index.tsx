import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, routeSet, testsLoad} from '../../../actions';
import * as classnames from 'classnames';
import {ListItem} from 'material-ui/List';
import {progressIcon} from '../progressIcon';
import {grey400} from 'material-ui/styles/colors';

const styles = {
  paddingLeft: '15px',
  marginTop: '0px',
};

@connect(null, (dispatch) => {
  return {
    selectPage: (position: CR.Position) => {
      dispatch(pageSet(position));
      dispatch(testsLoad());
      dispatch(routeSet('page'));
    }
  };
})
export class ProgressPage extends React.Component<{
  page: CR.Page, chapterIndex: number, progress: CR.Progress,
  position: CR.Position, pageIndex: number, selectPage?: () => void}, {}> {
  canActivate(isActive: boolean) {
    const {chapterIndex, pageIndex, position, progress} = this.props;
    const completed = progress.chapters[chapterIndex].pages[pageIndex];
    const currentChapter = chapterIndex === position.chapter;
    const earlierOrCurrentPage = pageIndex <= position.page;
    return isActive || completed ||
      (currentChapter && earlierOrCurrentPage);
  }
  render() {
    const {page, position, chapterIndex, pageIndex, progress, selectPage} = this.props;
    const isActive = chapterIndex === position.chapter && pageIndex === position.page;
    const canActivate = this.canActivate(isActive);
    const completed = progress.chapters[chapterIndex].pages[pageIndex];
    return (
      <ListItem
        key={pageIndex}
        style={Object.assign({}, styles, !canActivate ? {color: grey400} : {})}
        primaryText={`${pageIndex + 1}. ${page.title}`}
        secondaryText={canActivate ? page.description : ''}
        leftIcon={progressIcon(completed, isActive)}
        onClick={
          canActivate
            ? selectPage.bind(this, {
              chapter: chapterIndex,
              page: pageIndex
            })
            : function () { return; }
          }
      />
    );
  };
};

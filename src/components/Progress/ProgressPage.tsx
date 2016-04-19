import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, setRoute} from '../../actions';
import * as classnames from 'classnames';
import {ListItem} from 'material-ui/List';
import {progressIcon} from './progressIcon';

@connect(null, (dispatch) => {
  return {
    selectPage: (position: CR.Position) => {
      dispatch(pageSet(position));
      dispatch(setRoute('page'));
    }
  };
})
export class ProgressPage extends React.Component<{
  page: CR.Page, chapterIndex: number,
  position: CR.Position, pageIndex: number, selectPage?: () => void}, {}> {
  canActivate(isActive: boolean) {
    const {chapterIndex, pageIndex, position} = this.props;
    const earlierChapter = chapterIndex < position.chapter;
    const currentChapter = chapterIndex === position.chapter;
    const earlierOrCurrentPage = pageIndex <= position.page;
    if (isActive || earlierChapter ||
      (currentChapter && earlierOrCurrentPage)) {
      return true;
    } else {
      return null;
    }
  }
  render() {
    const {page, position, chapterIndex, pageIndex, selectPage} = this.props;
    console.log(this.props);
    const isActive = chapterIndex === position.chapter && pageIndex === position.page;
    return (
      <ListItem
        className={classnames({
          'page': true,
          'page-isDisabled': !this.canActivate(isActive)
        })}
        primaryText={`${pageIndex + 1}. ${page.title}`}
        secondaryText={page.description}
        leftIcon={progressIcon(page.completed, isActive)}
        onClick={
          this.canActivate(isActive)
            ? selectPage.bind(this, {
              chapter: chapterIndex,
              page: pageIndex
            })
            : null
          }
      />
    );
  };
};

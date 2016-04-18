import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, setRoute} from '../../actions';
import {Markdown} from '../index';
import * as classnames from 'classnames';
import {ListItem} from 'material-ui/List';
import {pink500} from 'material-ui/styles/colors';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

@connect(null, (dispatch) => {
  return {
    selectPage: (position: CR.Position) => {
      dispatch(pageSet(position));
      dispatch(setRoute('page'));
    }
  };
})
export class ProgressPage extends React.Component<{
  page: CR.Page, itemPosition: CR.Position, position: CR.Position,
  selectPage?: () => void}, {}> {
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
    return (
      <ListItem
        className={classnames({
          'page': true,
          'page-isDisabled': !this.canActivate(isActive, itemPosition, position)
        })}
        primaryText={`${itemPosition.page + 1}. ${page.title}`}
        secondaryText={page.description}
        leftIcon={this.getProgressIcon(page.completed, isActive)}
        onClick={
          this.canActivate(isActive, itemPosition, position)
            ? this.props.selectPage.bind(this, itemPosition)
            : null
          }
      />
    );
  };
};

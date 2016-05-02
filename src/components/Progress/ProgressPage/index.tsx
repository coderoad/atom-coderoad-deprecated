import * as React from 'react';
import {connect} from 'react-redux';
import {pageSet, routeSet, testsLoad} from '../../../actions';
import {ListItem} from 'material-ui/List';
import {progressIcon} from '../progressIcon';
import {grey400} from 'material-ui/styles/colors';

const styles = {
  paddingLeft: '15px',
  marginTop: '0px',
};

@connect(null, (dispatch) => {
  return {
    selectPage: (pagePosition: CR.PagePosition) => {
      dispatch(pageSet(pagePosition));
      dispatch(testsLoad(pagePosition));
      dispatch(routeSet('page'));
    }
  };
})
export class ProgressPage extends React.Component<{
  page: CR.Page, progress: CR.Progress,
  pagePosition: CR.PagePosition, index: number, selectPage?: () => void}, {}> {
  render() {
    const {page, pagePosition, index, progress, selectPage} = this.props;
    const isCompleted: boolean = progress.pages[index] || false;
    const canActivate: boolean = index <= pagePosition + 1;
    const isCurrentPage: boolean = index === pagePosition;
    return (
      <ListItem
        key={index}
        style={Object.assign({}, styles, !canActivate ? {color: grey400} : {})}
        primaryText={`${index + 1}. ${page.title}`}
        secondaryText={page.description}
        leftIcon={progressIcon(isCompleted, isCurrentPage)}
        onClick={
          canActivate
            ? selectPage.bind(this, index)
            : function () { return; }
          }
      />
    );
  };
};

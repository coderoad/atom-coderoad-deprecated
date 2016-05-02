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
  page: CR.Page, progress: CR.Progress,
  position: CR.Position, index: number, selectPage?: () => void}, {}> {
  canActivate(isActive: boolean) {
    const {index, position, progress} = this.props;
    const completed = progress.pages[index];
    return isActive || completed;
  }
  render() {
    console.log(this.props);
    const {page, position, index, progress, selectPage} = this.props;
    const isActive = index === position.page;
    const canActivate = this.canActivate(isActive);
    const completed = progress.pages[index];
    return (
      <ListItem
        key={index}
        style={Object.assign({}, styles, !canActivate ? {color: grey400} : {})}
        primaryText={`${index + 1}. ${page.title}`}
        secondaryText={canActivate ? page.description : ''}
        leftIcon={progressIcon(completed, isActive)}
        onClick={
          canActivate
            ? selectPage.bind(this, {
              page: index
            })
            : function () { return; }
          }
      />
    );
  };
};

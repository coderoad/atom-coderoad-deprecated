import * as React from 'react';
import {connect} from 'react-redux';

import {pageSet, routeSet} from '../../../actions';
import progressIcon from '../progressIcon';
import {ListItem} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';

const styles = {
  paddingLeft: '15px',
  marginTop: '0px',
};

@connect(null, dispatch => ({
  selectPage(pagePosition: CR.PagePosition) {
    dispatch(pageSet(pagePosition));
    dispatch(routeSet('page'));
  },
}))
export default class ProgressPage extends React.Component<{
  page: CR.Page, progress: CR.Progress,
  pagePosition: CR.PagePosition, index: number, selectPage?: () => void}, {}> {
  public doNothing() {
    return;
  }
  public render() {
    const {page, pagePosition, index, progress, selectPage} = this.props;
    const canActivate: boolean = index <= pagePosition;
    return (
      <ListItem
        key={index}
        style={ Object.assign({}, styles, canActivate ? {} : {color: grey400}) }
        primaryText={`${index + 1}. ${page.title}`}
        secondaryText={page.description}
        leftIcon={progressIcon(progress.pages, pagePosition, index)}
        onClick={canActivate ? selectPage.bind(this, index) : this.doNothing }
      />
    );
  };
};

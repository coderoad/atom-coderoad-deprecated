import * as React from 'react';
import {connect} from 'react-redux';

import {pageSet, routeSet} from '../../../actions';
import progressIcon from '../progressIcon';
import {ListItem} from 'material-ui/List';
import {grey400} from 'material-ui/styles/colors';

const styles: React.CSSProperties = {
  paddingLeft: '15px',
  marginTop: '0px',
};

class ProgressPage extends React.Component<{
  page: CR.Page, progress: CR.Progress,
  pagePosition: CR.PagePosition, index: number,
  selectPage: (pagePosition: number) => any
}, {}> {
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

const mapStateToProps = (state, props) => ({
  progress: state.progress,
  pagePosition: state.pagePosition,
  page: props.page,
  index: props.index,
});

const mapDispatchToProps = dispatch => ({
  selectPage(pagePosition: CR.PagePosition) {
    dispatch(pageSet(pagePosition));
    dispatch(routeSet('page'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
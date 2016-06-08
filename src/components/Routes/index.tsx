import * as React from 'react';
import {connect} from 'react-redux';
import {Page, Progress, Tutorials, Start, FinalPage} from '../index';

@connect(state => ({
  route: state.route,
}))
export default class Routes extends React.Component<{
  route?: string
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page />;
      case 'progress':
        return <Progress />;
      case 'start':
        return <Start />;
      case 'tutorials':
        return <Tutorials />;
      case 'final':
        return <FinalPage />;
      default:
        throw 'Error: Route not found.';
    }
  }
}

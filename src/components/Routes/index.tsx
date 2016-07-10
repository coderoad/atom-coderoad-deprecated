import * as React from 'react';
import {connect} from 'react-redux';

import {FinalPage, Page, Progress, Start, Tutorials} from '../index';

// const createRouter = (routes: Object) => {
//   return;
// };
//
// const router = {
//   page: <Page />,
//   progress: <Progress />,
//   start: <Start />,
//   tutorials: <Tutorials />,
//   final: <FinalPage />,
// };

@connect(state => ({ route: state.route }))
export default class Routes extends React.Component<{
  route?: string
}, {}> {
  public render() {
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

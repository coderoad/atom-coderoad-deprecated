import * as React from 'react';
import {Page, Progress, Tutorials, Start, FinalPage} from '../index';

export default class Routes extends React.Component<{
  route: string, progress: CR.Progress, page: CR.Page, tutorials: Tutorial.Info[],
  testRun: boolean, checks: CR.Checks, pagePosition: CR.PagePosition, tasks: CR.Task[],
  taskPosition: number, hintPosition: number, tutorial: CR.Tutorial
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page {...this.props} />;
      case 'progress':
        return <Progress {...this.props} info={this.props.tutorial.info}/>;
      case 'start':
        return <Start {...this.props} />;
      case 'tutorials':
        return <Tutorials {...this.props} />;
      case 'final':
        return <FinalPage />;
      default:
        throw 'Error: Route not found.';
    }
  }
}

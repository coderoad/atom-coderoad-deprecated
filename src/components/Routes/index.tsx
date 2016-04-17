import * as React from 'react';
import {Page, Progress, Tutorials, Start, FinalPage} from '../index';

export class Routes extends React.Component<{
  route: string, progress: CR.Progress, page: CR.Page, tutorials: CR.Tutorial[],
  testRun: boolean, checks: CR.Checks, position: CR.Position, tasks: CR.Task[],
  taskPosition: number, hintPosition: number
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page {...this.props} />;
      case 'progress':
        return <Progress {...this.props} />;
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

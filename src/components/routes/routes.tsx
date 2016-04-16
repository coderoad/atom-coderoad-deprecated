import * as React from 'react';
import {Page, Progress, Tutorials, Start, FinalPage} from '../_components';

export class Routes extends React.Component<{state: CR.State}, {}> {
  render() {
    const {page, tasks, taskPosition, hintPosition, editorActions, testRun,
      log, progress, position, checks, tutorials, route} = this.props.state;
    switch (route) {
      case 'page':
        return <Page page={page}
                    tasks={tasks}
                    taskPosition={taskPosition}
                    hintPosition={hintPosition}
                    editorActions={editorActions}
                    testRun={testRun} />;
      case 'progress':
        return <Progress progress={progress}
                        position={position} />;
      case 'start':
        return <Start checks={checks} />;
      case 'tutorials':
        return <Tutorials tutorials={tutorials} />;
      case 'final':
        return <FinalPage />;
      default:
        throw 'Error: Route not found.';
    }
  }
}

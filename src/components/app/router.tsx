import * as React from 'react';
import {Page, Progress, Projects} from '../_components';

export default class extends React.Component<{state: CR.State}, {}> {
  chooseRoute(state: CR.State) {
    switch (state.route) {
      case 'page':
        return <Page page={state.page}
                    tasks={state.tasks}
                    taskPosition={state.taskPosition}
                    editorActions={state.editorActions}
                    runTests={state.runTests}
                    log={state.log} />;
      case 'progress':
        return <Progress progress={state.progress}
                        position={state.position} />;
      case 'projects':
        return <Projects tutorials={state.tutorials} />;
      default:
        throw 'Error: Route not found.';
    }
  }
  render() {
    const state = this.props.state;
    return this.chooseRoute(state);
  }
}

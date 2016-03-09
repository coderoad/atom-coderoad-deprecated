import * as React from 'react';
import {Page, Progress, Start, FinalPage} from '../_components';

export default class extends React.Component<{state: CR.State}, {}> {
  chooseRoute(state: CR.State) {
    switch (state.route) {
      case 'page':
        return <Page page={state.page}
                    tasks={state.tasks}
                    taskPosition={state.taskPosition}
                    hintPosition={state.hintPosition}
                    editorActions={state.editorActions}
                    runTests={state.runTests}
                    log={state.log} />;
      case 'progress':
        return <Progress progress={state.progress}
                        position={state.position} />;
      case 'projects':
        return <Start tutorials={state.tutorials} warning={state.warning} />;
      case 'final':
        return <FinalPage />;
      default:
        throw 'Error: Route not found.';
    }
  }
  render() {
    const state = this.props.state;
    return (
       <div>
        {this.chooseRoute(state)}
       </div>
    );
  }
}

import * as React from 'react';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';
import {Page, Progress, Tutorials, Checks, FinalPage} from '../_components';

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
      case 'checks':
        return <Checks checks={state.checks} />;
      case 'tutorials':
        return <Tutorials tutorials={state.tutorials} />;
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

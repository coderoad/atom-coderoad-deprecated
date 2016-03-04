import * as React from 'react';
import {Page, Progress, Projects} from './_components';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        return <Projects tutorials={state.tutorials} />;
      default:
        throw 'Error: Route not found.';
    }
  }
  render() {
    const state = this.props.state;
    return (
       <ReactCSSTransitionGroup transitionName='route' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {this.chooseRoute(state)}
       </ReactCSSTransitionGroup>
    );
  }
}

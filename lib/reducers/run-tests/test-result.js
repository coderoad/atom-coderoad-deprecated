function handleResult(s){var e={taskPosition:s.taskPosition,change:s.taskPosition-_base_1.store.getState().taskPosition};e.pass=e.change>0?!0:!1,e.pass?e.pass&&(e.msg="Task "+s.taskPosition+" Complete",_base_1.store.dispatch(Action.pageComplete()),_base_1.store.dispatch(Action.testResult(e))):(e.failedAtFile=s.failedAtFile,e.msg=s.msg,_base_1.store.dispatch(Action.testResult(e))),_base_1.store.dispatch(Action.testComplete())}function handleLog(s){console.log("CONSOLE\n"+s),_base_1.store.dispatch(Action.logMessage(s))}var _base_1=require("../../_base"),Action=require("../../actions/actions");exports.handleResult=handleResult,exports.handleLog=handleLog;
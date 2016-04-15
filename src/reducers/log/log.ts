import {
  TOGGLE_LOG, LOG_MESSAGE
} from '../../actions/actionTypes';

let defaultLog = {
  message: 'EMPTY',
  open: false
};

export default function logReducer(log = defaultLog, action: CR.Action): CR.Log {
  switch (action.type) {
    case TOGGLE_LOG:
      return {
        open: action.payload.open,
        message: log.message || ''
      };
    case LOG_MESSAGE:
      return {
        open: true,
        message: action.payload.message
      };
    default:
      return log;
  }
}

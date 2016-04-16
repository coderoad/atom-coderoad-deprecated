import {
  LOG_TOGGLE, LOG_MESSAGE
} from '../../actions/_types';

let defaultLog = {
  message: 'EMPTY',
  open: false
};

export default function logReducer(log = defaultLog,
  action: CR.Action): CR.Log {
  switch (action.type) {
    case LOG_TOGGLE:
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

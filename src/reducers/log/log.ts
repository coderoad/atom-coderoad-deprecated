import * as Type from '../../actions/actionTypes';

let defaultLog = {
  message: 'EMPTY',
  open: false
};

export default function logReducer(log = defaultLog, action): {open: boolean, message: string} {
  switch (action.type) {
    case Type.TOGGLE_LOG:
      return {
        open: action.payload.open,
        message: log.message || ''
      };
    case Type.LOG_MESSAGE:
      return {
        open: true,
        message: action.payload.message
      };
    default:
      return log;
  }
}

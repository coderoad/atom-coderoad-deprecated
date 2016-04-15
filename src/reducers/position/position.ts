import {
  SET_PAGE, SET_POSITION
} from '../../actions/actionTypes';

const defaultPosition: CR.Position = {
  chapter: 0,
  page: 0
};

export default function positionReducer(position = defaultPosition, action: CR.Action): CR.Position {
  switch (action.type) {
    case SET_PAGE:
    case SET_POSITION:
      return action.payload.position;
    default:
      return position;
  }
}

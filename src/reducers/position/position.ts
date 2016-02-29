import * as Type from '../../actions/actionTypes';

const defaultPosition: CR.Position = {
  chapter: 0,
  page: 0
};

export default function positionReducer(position = defaultPosition, action: CR.Action): CR.Position {
  switch (action.type) {
    case Type.SET_PAGE:
    case Type.SET_POSITION:
      return action.payload.position;
    default:
      return position;
  }
}

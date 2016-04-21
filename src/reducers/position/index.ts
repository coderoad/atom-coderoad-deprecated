import {
  PAGE_SET, POSITION_SET
} from '../../actions/_types';

const _position: CR.Position = {
  chapter: 0,
  page: 0,
};

export default function positionReducer(
  position = _position, action: Action
): CR.Position {
  switch (action.type) {
    case PAGE_SET:
    case POSITION_SET:
      return action.payload.position;
    default:
      return position;
  }
}

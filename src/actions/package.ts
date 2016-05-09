import {PACKAGE_SET} from './_types';

export function packageSet(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir} = getState();
    dispatch({ type: PACKAGE_SET, payload: { dir } });
  };
}

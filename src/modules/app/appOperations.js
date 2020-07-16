import * as actions from './appActions';

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());
      dispatch(actions.initialization.success());
    } catch (err) {
      dispatch(
        actions.initialization.error({message: err.message}),
      );
    }
  };
}

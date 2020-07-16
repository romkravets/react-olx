import * as actions from './appActions';
import Api from 'src/api';
import {viewerOperations} from "../viewer";

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      Api.init();

       await dispatch(viewerOperations.fetchViewer());

      dispatch(actions.initialization.success());
    } catch (err) {
      dispatch(
        actions.initialization.error({message: err.message}),
      );
    }
  };
}

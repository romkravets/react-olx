import * as actions from './viewerActions';
import Api from 'src/api';


export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api.Viewer.get();

      dispatch(actions.fetchViewer.success(res.data));
    } catch (err) {
      dispatch(
        actions.fetchViewer.error({message: err.message}),
      );
    }
  };
}

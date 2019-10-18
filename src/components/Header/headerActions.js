import { asyncActionNames, buildAsyncActions } from '../../services/ActionCreator';
const path = asyncActionNames("PATH");
const pathActions = buildAsyncActions(path);

const request = asyncActionNames("REQUEST");
const requestActions = buildAsyncActions(request);

const loader = asyncActionNames("LOADER");
const loaderActions = buildAsyncActions(loader);

const error = asyncActionNames("ERROR");
const errorActions = buildAsyncActions(error);

function setpath(path) {
    return function(dispatch) {
        dispatch(errorActions.failure(''));
        dispatch(loaderActions.success(true));
        dispatch(requestActions.success([]));
        dispatch(pathActions.success(path));
    }
}
export { setpath };
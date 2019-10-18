import { asyncActionNames, buildAsyncActions } from '../../services/ActionCreator';
import { http } from '../../services/http';

const request = asyncActionNames("REQUEST");
const requestActions = buildAsyncActions(request);

const loader = asyncActionNames("LOADER");
const loaderActions = buildAsyncActions(loader);

const error = asyncActionNames("ERROR");
const errorActions = buildAsyncActions(error);

function newsApi(url, formData = {}) {
    return function(dispatch) {
        http('/' + url + '?').then((result) => {
            dispatch(loaderActions.success(false));
            dispatch(requestActions.success(result.sources));
        }).catch((error) => {
            dispatch(loaderActions.success(false));
            dispatch(errorActions.failure(error));
            console.log(error);
        })
    }
}

export { newsApi };
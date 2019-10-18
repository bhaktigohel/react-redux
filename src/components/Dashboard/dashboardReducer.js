import { asyncActionNames } from '../../services/ActionCreator';
const request = asyncActionNames("REQUEST");
const loader = asyncActionNames("LOADER");
const error = asyncActionNames("ERROR");

const INITIAL_STATE = { articleData: [], error: '', loader: false };

let dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case request.success:
            return {...state, articleData: action.payload };
        case loader.success:
            return {...state, loader: action.payload };
        case error.failure:
            return {...state, error: action.errors };
        default:
            return state;
    }
}
export { dashboardReducer }
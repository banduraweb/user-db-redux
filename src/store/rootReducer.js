import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';
import { reducer as reduxFormReducer } from 'redux-form';

export const initialState = {
    usersData: [],
};

 const rootReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USERS: {
            const {payload} = action;
            return {
                ...state,
                usersData: payload
            };
        }
        case ACTION_TYPES.DATA_ADD_SUCCESS: {
            const {payload} = action;
            return {
                ...state,
                usersData: [...state.usersData, payload ]
            };
        }
        default:
            return state;
    }
};




const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.START_LOADING: {
            return true
        }
        case ACTION_TYPES.STOP_LOADING: {
            return false
        }
        default:
            return state;
    }
};




export const rootReducer2 = combineReducers({
    usersData: rootReducer,
    isLoading: loadingReducer,
    form: reduxFormReducer
});


import { combineReducers } from 'redux';
import { ACTION_TYPES } from './actions';
import { reducer as reduxFormReducer } from 'redux-form';

export const initialState = {
    usersData: null,
};

 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USERS: {

            const {payload} = action;

            return {
                ...state,
                usersData: payload
            };
        }
        case ACTION_TYPES.DATA_GET_SUCCESS: {

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

export const rootReducer2 = combineReducers({
    usersData: rootReducer,
    form: reduxFormReducer.plugin({})
});


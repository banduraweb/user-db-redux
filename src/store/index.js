import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer2, initialState } from './rootReducer';

export const store = createStore(
    rootReducer2,
    initialState,
    composeWithDevTools(
    applyMiddleware(thunk),
));



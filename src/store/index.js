import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer2 } from './rootReducer';

export const store = createStore(
    rootReducer2,
    composeWithDevTools(
    applyMiddleware(thunk),
));



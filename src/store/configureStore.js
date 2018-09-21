import { createStore, combineReducers } from 'redux';

import itemsReducer from './reducers/';

const rootReducer = combineReducers({
    items: itemsReducer,
});

const configureStore = () => {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
export default configureStore;

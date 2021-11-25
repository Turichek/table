import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataReducer } from './Data/dataReducer';
import { pageReducer } from './Page/pageReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    page: pageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
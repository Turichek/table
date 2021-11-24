import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataReducer } from './Data/dataReducer';

const rootReducer = combineReducers({
    data: dataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
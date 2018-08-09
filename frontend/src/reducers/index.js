import {combineReducers} from 'redux';
import clients from './clients_reducers';

const rootReducer = combineReducers({
    clients
})

export default rootReducer;
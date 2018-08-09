import {combineReducers} from 'redux';
import clients from './clients_reducers';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer
}

const rootReducer = combineReducers({
    clients,
    reducers
})

export default rootReducer;  
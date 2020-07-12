import {createStore,combineReducers} from 'redux';
import fonts from './Reducer';

const rootReducers = combineReducers({
  fonts
})
const store = createStore(rootReducers);

export default store;

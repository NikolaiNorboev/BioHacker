import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './reducers/auth';
import questionnaireReducer from './reducers/questionnaire'


const storageState = window.localStorage.getItem('state') || '{"isAuthenticated": false}';
const initialState = storageState ? JSON.parse(storageState) : undefined;

const store = createStore(
  combineReducers({
    auth: authReducer,
    quest: questionnaireReducer,
  }),
  initialState,
  composeWithDevTools()
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
}); 

export default store;

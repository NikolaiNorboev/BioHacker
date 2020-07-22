import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './reducers/auth';
import questionnaireReducer from './reducers/questionnaire';
import stepperReducer from './reducers/stepper';
import channelReducer from './reducers/channel';
import programReducer from  './reducers/program';


// const storageState = window.localStorage.getItem('state') || '{"isAuthenticated": false}';
// const initialState = storageState ? JSON.parse(storageState) : undefined;

const store = createStore(
  combineReducers({
    auth: authReducer,
    quest: questionnaireReducer,
    step: stepperReducer,
    channel: channelReducer,
    program: programReducer,
  }),
  // initialState,
  {},
  composeWithDevTools()
);

// store.subscribe(() => {
//   const state = store.getState();
//   window.localStorage.setItem('state', JSON.stringify(state));
// }); 

export default store;

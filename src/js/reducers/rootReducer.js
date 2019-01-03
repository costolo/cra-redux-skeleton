import { combineReducers } from 'redux';
import { createAction } from 'redux-act';
import { routerReducer } from '../routes';

const reducers = combineReducers({
  router: routerReducer,
});

export const appInit = createAction('App initialized');
export default reducers;

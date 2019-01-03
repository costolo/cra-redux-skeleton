import { createStore, compose, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { routerMiddleware, routerEnhancer } from './routes';
import rootReducer, { appInit } from './reducers/rootReducer';
import rootLogic from './reducers/rootLogic';

/* redux devtools */
const hasDevtools =
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined';
const composeEnhancers = hasDevtools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
  : compose;

const initialState = {};
const logicMiddleware = createLogicMiddleware(rootLogic, {});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    routerEnhancer,
    applyMiddleware(routerMiddleware, logicMiddleware)
  )
);

store.dispatch(appInit());

export default store;

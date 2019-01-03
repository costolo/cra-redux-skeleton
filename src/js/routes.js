import { routerForBrowser } from 'redux-little-router';

const routes = {
  '/': {
    title: 'Home',
  },
};

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = routerForBrowser({ routes });

export { routerReducer, routerMiddleware, routerEnhancer };

import { 
  createStore,
  compose,
  combineReducers,
} from 'redux';

import {
  reducer,
} from '../modules/ticker';

const rootReducer = combineReducers({
  reducer,
});

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
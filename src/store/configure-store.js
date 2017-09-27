import { 
  createStore,
  compose,
  combineReducers,
} from 'redux';

import * as ticker from '../modules/ticker';
import * as menu from '../modules/menu';

const rootReducer = combineReducers({
  ticks: ticker.reducer,
  menu: menu.reducer,
});

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
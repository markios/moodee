import * as types from '../actions/menu-actions';

const default_state = {
  option: 'ticker',
};

export default (state = default_state, action) => {
  switch (action.type) {
    case types.INC_TICK:
      const key = Date.now();
      const item = state[key] || { count: 0 };
      
      return {...state, [key]: item };
    default:
      return default_state;
  }
};
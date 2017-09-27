import * as types from '../actions/menu-actions';

const options = ['ticker', 'data'];

const default_state = {
  target: options[0],
  menu_options: options,
};

export default (state = default_state, action) => {
  switch (action.type) {
    case types.CHANGE_MENU:
      return { ...state, target: action.name };
    default:
      return default_state;
  }
};



import * as types from '../actions/ticks-actions';

const getDateString = 
  (date = new Date()) => `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

const days = ['Sunday', 'Mon', 'Tues', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function ordinal(d) {
  if(d>3 && d<21) return 'th'; // thanks kennebec
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
} 

function getFormatDateString(date = new Date()) {
  const day = date.getDay();
  const dayName = days[day];
  const dayPrefixed = `${day}${ordinal(day)}`;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName} ${dayPrefixed} ${month} ${year}`;
}


export default (state = {}, action) => {
  switch (action.type) {
    case types.INC_TICK:
      const key = getDateString();
      const newState = {...state};
      newState[key].push(Date.now());
      return newState;
    default: {
      const key = getDateString();
      state[key] = state[key] || { count: [] };
      state.currentDayStamp = getFormatDateString();
      state.currentKey = key;
      return state;
    }
  }
};
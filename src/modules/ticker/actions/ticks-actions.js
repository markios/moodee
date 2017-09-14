
const INC_TICK = 'inc_tick';
const DEC_TICK = 'dec_tick';

export const incrementTick = () => {
  return {
    type: types.ADD_TICK,
  };
}

export const decrementTick = () => {
  return {
    type: types.DEC_TICK,
  };
}
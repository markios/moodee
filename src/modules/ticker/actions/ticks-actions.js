
export const INC_TICK = 'inc_tick';
export const DEC_TICK = 'dec_tick';

export const incrementTick = () => {
  return {
    type: INC_TICK,
  };
}

export const decrementTick = () => {
  return {
    type: DEC_TICK,
  };
}
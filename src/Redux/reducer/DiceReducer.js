import { CLEAR_DICE, ROLL_THE_DICE } from '../ActionTypes';

export const diceRollReducer = (state = { dices: [], count: 0 }, action) => {
  switch (action.type) {
    case ROLL_THE_DICE:
      return { count: state.count + 1, dices: action.payload };
    case CLEAR_DICE:
      return { count: 0, dices: [] };
    default:
      return state;
  }
};

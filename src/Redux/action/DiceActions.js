import { CLEAR_DICE, ROLL_THE_DICE } from '../ActionTypes';
let dices = [];

const rollDice = () => (dispatch) => {
  try {
   
    let min = Math.ceil(1);
    let max = Math.floor(7);

    const generateNumber = Math.floor(Math.random() * (max - min) + min);
    const newDice = { value: generateNumber };
    
    dices.push(newDice);

    dispatch({
      type: ROLL_THE_DICE,
      payload: dices,
    });
  } catch (error) {
    console.log(error);
  }
};

const clearDice = () => (dispatch) => {
  try {
    dices = [];
    dispatch({
      type: CLEAR_DICE,
    });
  } catch (error) {
    console.log(error);
  }
};

export { rollDice, clearDice };

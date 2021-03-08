import React from 'react';
import { rollDice, clearDice } from '../Redux/action/DiceActions';
import { useDispatch } from 'react-redux';

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div className='btns'>
      <button className='btn' onClick={() => dispatch(rollDice())}>
        Roll Dice
      </button>
      <button className='btn' onClick={() => dispatch(clearDice())}>
        Clear Dice
      </button>
    </div>
  );
};

export default Button;

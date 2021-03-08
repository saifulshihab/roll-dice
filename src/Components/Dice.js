import React from 'react';

const Dice = ({ diceNumber }) => {
  return (
    <div className='dice'>
      <i
        style={{ fontSize: '6rem' }}
        className={`fas fa-dice-${
          diceNumber === 'one'
            ? 'one'
            : diceNumber === 'two'
            ? 'two'
            : diceNumber === 'three'
            ? 'three'
            : diceNumber === 'four'
            ? 'four'
            : diceNumber === 'five'
            ? 'five'
            : diceNumber === 'six' && 'six'
        }`}
      ></i>
    </div>
  );
};

export default Dice;
